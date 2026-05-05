const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({ adapter: process.env.DATABASE_URL })

async function main() {
  // Example seed data - add your own data seeding logic here
  const user = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      name: 'Test User',
    },
  })
  console.log('Seeded user:', user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
