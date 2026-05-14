import { auth } from "@/app/auth";
import { prisma } from "@/app/lib/prisma";

export default async function LoginHistoryPage() {

    const session = await auth();

    const history =
        await prisma.loginHistory.findMany({
            where: {
                userId: session?.user?.id,
            },
            orderBy: {
                createdAt: "desc",
            },
            take: 50,
        });

    return (
        <div>
            <h1>Login History</h1>

            {history.map((entry) => (
                <div key={entry.id}>
                    <p>{entry.ipAddress}</p>
                    <p>{entry.userAgent}</p>
                    <p>
                        {new Date(
                            entry.createdAt
                        ).toLocaleString()}
                    </p>
                </div>
            ))}
        </div>
    );
}