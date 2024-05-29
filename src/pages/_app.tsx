
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { AuthProvider } from '@/contexts/AuthContext';
export default function App({ Component, pageProps }: AppProps) {
  return <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
}
