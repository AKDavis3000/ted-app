import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './scss/styles.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Teduhan App',
  description: 'Coded by Akilah Davis',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
