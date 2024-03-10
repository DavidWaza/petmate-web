import DesktopHeader from "@/Components/Navigation/DesktopHeader/Header";
import MobileHeader from "@/Components/Navigation/MobileHeader/Header";
import { useMediaQuery } from "react-responsive";

const RootLayout = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
//   const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      {isDesktopOrLaptop && <DesktopHeader />}
      {isTabletOrMobile && <MobileHeader />}
    </>
  );
};
export default RootLayout;