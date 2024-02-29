import Image from "next/image";
import ImageLogo from "/public/images/logo.png";

const Logo = () => {
  return (
    <>
      <Image src={ImageLogo} alt="logo" width={200} height={200} />
    </>
  );
};
export default Logo;
