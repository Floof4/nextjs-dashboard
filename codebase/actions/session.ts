'use server';

import { redis } from "@/app/lib/redis";
import { prisma } from "@/app/lib/prisma";

export async function revokeSession(
    formData: FormData
) {

    const sessionId =
        formData.get("sessionId") as string;

    await redis.del(
        `session:${sessionId}`
    );

    await prisma.activeSession.delete({
        where: {
            sessionId,
        },
    });
}

export async function revokeAllSessions(
    userId: string
) {

    const sessions =
        await prisma.activeSession.findMany({
            where: {
                userId,
            },
        });

    for (const session of sessions) {

        await redis.del(
            `session:${session.sessionId}`
        );
    }

    await prisma.activeSession.deleteMany({
        where: {
            userId,
        },
    });
}