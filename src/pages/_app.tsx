import Store from "@/store";
import "@/styles/globals.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Store><Component {...pageProps} /></Store>;
}
