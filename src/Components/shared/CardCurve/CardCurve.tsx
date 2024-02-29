import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FC, ReactNode } from "react";
import Link from "next/link";

interface CardCurveProps {
  imgSrc: string;
  children: ReactNode;
  link: string;
}
const CardCurve: FC<CardCurveProps> = (props) => {
  return (
    <div className="group">
      <div className="rounded-[40px] lg:h-[25rem] shadow-sm group-hover:shadow-none border border-[#FFF8F5]  p-3 group-hover:bg-[#FFF8F5] transition-all ease-in">
        <Image
          src={props.imgSrc}
          alt="pic"
          width={500}
          height={500}
          className="rounded-t-[40px] rounded-b-none w-full"
        />
        <p className="my-2">{props.children}</p>
        <div className="flex justify-between items-center py-5">
          <p>Read more</p>
          <div className="bg-[#FFF8F5] rounded-full p-3 shadow-md hover:shadow-none transition-all ease-linear cursor-pointer group-hover:bg-white">
            <Link href={props.link}>
              <MdOutlineKeyboardArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardCurve;
