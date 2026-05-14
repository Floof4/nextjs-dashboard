import { auth } from "@/app/auth";
import { prisma } from "@/app/lib/prisma";
import { revokeSession } from "@/actions/session";

export default async function SessionsPage() {

    const session = await auth();

    const sessions =
        await prisma.activeSession.findMany({
            where: {
                userId: session?.user?.id,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

    return (
        <div>
            <h1>Active Sessions</h1>

            {sessions.map((s) => (
                <div key={s.id}>
                    <p>{s.ipAddress}</p>
                    <p>{s.userAgent}</p>
                    <p>
                        {new Date(
                            s.createdAt
                        ).toLocaleString()}
                    </p>

                    <form action={revokeSession}>
                        <input
                            type="hidden"
                            name="sessionId"
                            value={s.sessionId}
                        />

                        <button type="submit">
                            Revoke
                        </button>
                    </form>
                </div>
            ))}
        </div>
    );
}