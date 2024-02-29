import Logo from "@/Components/Logo/Logo";
import Button from "@/Components/shared/Button/Button";
import Link from "next/link";
const navLinks = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About Us",
    link: "/",
  },
  {
    label: "Services",
    link: "/",
  },
  {
    label: "Reviews",
    link: "/",
  },
  {
    label: "Contact Us",
    link: "/",
  },
  {
    label: "FAQ",
    link: "/",
  },
];
const DesktopHeader = () => {
  return (
    <>
      <nav className="flex justify-between items-center gap-5 w-full p-10 bg-[#EBE0D6]">
        <Logo />
        <div className="flex gap-10">
          {navLinks.map((navLink, index) => (
            <Link href={navLink.link} key={index}>
              <p>{navLink.label}</p>
            </Link>
          ))}
        </div>
        <div className="flex gap-5">
          <Button bgColor="white" textColor="#604533" size="sm" icon={false}>
            Login
          </Button>
          <Button bgColor="#604533" textColor="white" size="sm" icon={false}>
            Sign Up
          </Button>
        </div>
      </nav>
    </>
  );
};
export default DesktopHeader;
