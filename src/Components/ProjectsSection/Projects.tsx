import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <div className="lg:px-[20rem] px-10">
      <h1 className="font-dmSans text-center text-[#604533] lg:text-3xl text-2xl px-20">
        Follow Our Projects
      </h1>
      <p className=" py-5 text-xl px-10 text-center">
        Its a long established fact that a reader will be distracted by the
        lorem ipsum text. i proise this is dummy
      </p>
      <div className="grid lg:grid-cols-2 my-10 gap-10">
        <div className="w-full">
          <Image
            src={"/images/love-dogs.png"}
            alt="love-dogs"
            width={500}
            height={500}
            className="w-full"
          />
          <div className="flex justify-between my-3">
            <div>
              <h1>Pet Mating</h1>
              <p>Finding the best mate</p>
            </div>
            <div>
              <div className="bg-[#FFF8F5] rounded-full p-3 shadow-md hover:shadow-none transition-all ease-linear cursor-pointer group-hover:bg-white">
                <Link href={`#`}>
                  <MdOutlineKeyboardArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image
            src={"/images/hi-five-cat.png"}
            alt="love-dogs"
            width={500}
            height={500}
            className="rounded-ss-[60px] w-full"
          />
          <div className="flex justify-between my-3">
            <div>
              <h1>Pet Adoption</h1>
              <p>Finding a furry family</p>
            </div>
            <div>
              <div className="bg-[#FFF8F5] rounded-full p-3 shadow-md hover:shadow-none transition-all ease-linear cursor-pointer group-hover:bg-white">
                <Link href={`#`}>
                  <MdOutlineKeyboardArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image
            src={"/images/groom-dog.png"}
            alt="love-dogs"
            width={500}
            height={500}
            className="rounded-ee-[60px] w-full"
          />
          <div className="flex justify-between my-3">
            <div>
              <h1>Veterinary & Grooming services</h1>
              <p>24/7 access to veterinary clinics</p>
            </div>
            <div>
              <div className="bg-[#FFF8F5] rounded-full p-3 shadow-md hover:shadow-none transition-all ease-linear cursor-pointer group-hover:bg-white">
                <Link href={`#`}>
                  <MdOutlineKeyboardArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectSection;
