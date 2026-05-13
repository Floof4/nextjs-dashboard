import '@/app/ui/global.css';
import { montserrat, afacad, fraunces } from '@/app/ui/fonts';
import DeviceProvider from "@/app/provider/device-provider";
import { SessionProvider } from "next-auth/react";
import { auth } from '@/app/auth';
import SessionTimeout from './SessionTimeout';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (

    <html
      lang="en"
      className={`${montserrat.variable} ${afacad.variable} ${fraunces.variable}`}>
      <body className="antialiased">
        <SessionTimeout />
        {children}
      </body>
    </html>

  );
}

