import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import Image from "next/image";

const Headers = ["Company", "Support"];

const companyLists = [
  {
    label: "About Us",
    link: "#",
  },
  {
    label: "Blog",
    link: "#",
  },
  {
    label: "Contact Us",
    link: "#",
  },
  {
    label: "Pricing",
    link: "#",
  },
  {
    label: "Testimonials",
    link: "#",
  },
];

const serviceLists = [
  {
    label: "Help center",
    link: "#",
  },
  {
    label: "Terms of service",
    link: "#",
  },
  {
    label: "Legal",
    link: "#",
  },
  {
    label: "Privacy policy",
    link: "#",
  },
  {
    label: "Status",
    link: "#",
  },
];

const Footer = () => {
  return (
    <div className="bg-[#C6AD8F] mt-20 px-10 lg:px-0 py-5">
      <div className="py-20 lg:px-[5rem]">
        <div className="lg:flex justify-between gap-[20px] text-white">
          <div className="text-center lg:text-left">
            <h1 className="font-bold font-dmSans text-xl mb-5">Company</h1>
            {companyLists.map((companylist, index) => (
              <Link href={companylist.link} key={index}>
                <p>{companylist.label}</p>
              </Link>
            ))}
          </div>
          <div className="text-center lg:text-left my-10 lg:my-0">
            <h1 className="font-bold font-dmSans text-xl mb-5">Support</h1>
            {serviceLists.map((servicelist, index) => (
              <Link href={servicelist.link} key={index}>
                <p>{servicelist.label}</p>
              </Link>
            ))}
          </div>
          <div>
            <div className="bg-[#22333c] p-4 rounded-2xl">
              <div className="lg:flex justify-between items-center gap-3 px-5">
                <div className="my-3 lg:my-0">
                  <p>
                    Register Now So You Dont Miss <br />
                    Our Programs
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <div className="lg:flex items-center justify-center gap-3">
                    <input
                      type="text"
                      placeholder="Enter you email"
                      className="p-3 border rounded-md w-full font-dmSans"
                    />
                    <button className="bg-[#003459] rounded-md p-3 border-none w-full my-3 lg:my-0">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end gap-5 my-10">
              <FaFacebook />
              <FaTwitter />
              <IoLogoInstagram />
              <IoLogoYoutube />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 px-[5rem]">
        <div className="flex justify-between">
          <p className="text-white">
            Copyright 2024, petmate. All rights reserved.
          </p>
          <Image
            src="/images/footer-logo.png"
            alt=""
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};
export default Footer;
