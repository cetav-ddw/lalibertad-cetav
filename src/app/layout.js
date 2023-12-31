import { SkipNavLink } from '@chakra-ui/react';
import { Providers } from '@/app/providers';
import Header from '@/app/components/Header';
import MainContent from '@/app/components/MainContent';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: 'CETAV',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <link rel="icon" href="/images/medio-trazo.png" />
          <SkipNavLink>Saltar al contenido</SkipNavLink>
          <Header />
          <MainContent>{children}</MainContent>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
