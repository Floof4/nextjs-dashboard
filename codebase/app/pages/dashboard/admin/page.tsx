import { auth } from "@/app/auth";
import { prisma } from "@/app/lib/prisma";

export default async function AdminLogPage() {
    return (
        <div>
            <h1>Admin Logs</h1>
            {/* Admin log content goes here */}
        </div>
    );
}