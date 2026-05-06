import '@/app/ui/global.css';
import { montserrat, afacad, fraunces } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${afacad.variable} ${fraunces.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
