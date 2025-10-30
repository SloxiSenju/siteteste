import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Playfair_Display } from 'next/font/google'

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Recetas Saludables',
  description: 'Seus ebooks de receitas saudáveis.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfairDisplay.className} font-body antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
