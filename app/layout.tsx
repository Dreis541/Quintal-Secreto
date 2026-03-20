import type { Metadata } from 'next';
import { Newsreader, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-newsreader',
  style: ['normal', 'italic'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: 'Quintal Secreto | Seu Refúgio Particular',
  description: 'Um espaço exclusivo para day use, perfeito para momentos de lazer com família e amigos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${newsreader.variable} ${plusJakartaSans.variable} scroll-smooth`}>
      <body className="bg-[#fef8f3] text-[#1d1b19] font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
