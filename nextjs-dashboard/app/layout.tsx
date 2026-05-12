import '@/app/ui/global.css';
import { montserrat, afacad, fraunces } from '@/app/ui/fonts';
import DeviceProvider from "@/app/provider/device-provider";
import { SessionProvider } from "next-auth/react";
import { auth } from '@/app/auth';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
    <html
      lang="en"
      className={`${montserrat.variable} ${afacad.variable} ${fraunces.variable}`}
    >
      <DeviceProvider />
      <body className="antialiased">{children}</body>
    </html>
    </SessionProvider>
  );
}

