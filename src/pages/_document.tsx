import { Html, Head, Main, NextScript } from "next/document";
import DesktopHeader from "@/Components/Navigation/DesktopHeader/Header";
import { useMediaQuery } from "react-responsive";
import Footer from "@/Components/Footer/Footer";

export default function Document() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 400px)" });
  return (
    <Html lang="en">
      <Head />
      <body>
        {!isMobile ? <div className="hidden">{''}</div> : <DesktopHeader />}
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
