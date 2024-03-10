import RootLayout from "@/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const DynamicRootLayout = dynamic(() => import("../layout"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DynamicRootLayout />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
