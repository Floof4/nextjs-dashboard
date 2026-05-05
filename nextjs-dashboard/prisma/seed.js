// Use the postgres driver directly to avoid Prisma client init changes in Prisma 7
const postgres = require('postgres');

const sql = postgres(process.env.DATABASE_URL, { max: 1 });

async function main() {
  // Upsert a test user using SQL
  const email = 'test@example.com';
  const name = 'Test User';

  const result = await sql`
    INSERT INTO "User" (email, name)
    VALUES (${email}, ${name})
    ON CONFLICT (email) DO UPDATE SET name = EXCLUDED.name
    RETURNING *;
  `;

  console.log('Seeded user:', result[0]);
}

main()
  .then(async () => {
    await sql.end({ timeout: 5 });
  })
  .catch(async (e) => {
    console.error(e);
    await sql.end({ timeout: 5 });
    process.exit(1);
  });
