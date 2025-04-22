import type { AppProps } from 'next/app';
import '../styles/globals.css';
import "@fontsource/inter";
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
    return (
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    );
  }
  
export default MyApp;