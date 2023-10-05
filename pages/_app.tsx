import Navbar from "@/components/ui/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`text-black ${montserrat.className} flex flex-col w-full justify-start items-center font-sans`}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
