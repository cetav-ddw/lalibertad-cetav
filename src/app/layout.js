import { Providers } from './providers';
import Header from './components/header';
import Banner from './components/banner';

export const metadata = {
  title: 'CETAV',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <Header />
          {children}
          <Banner />
        </Providers>
      </body>
    </html>
  );
}
