import { Montserrat, Afacad, Fraunces } from 'next/font/google';
import localFont from 'next/font/local';

// Google Fonts
export const montserrat = Montserrat({
  weight: ['700'],
  variable: '--f-lbl',
  subsets: ['latin'],
  display: 'swap',
});

export const afacad = Afacad({
  weight: ['400', '500', '600', '700'],
  variable: '--f-body',
  subsets: ['latin'],
  display: 'swap',
});

export const fraunces = Fraunces({
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--f-serif',
  subsets: ['latin'],
  display: 'swap',
});
