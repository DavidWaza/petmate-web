import Image from "next/image";
import { FC, ReactNode } from "react";

interface CardCurveProps {
  imgSrc: string;
  children: ReactNode;
  header: string;
}
const BlogCards: FC<CardCurveProps> = (props) => {
  return (
    <div className="group">
      <div className="rounded-md shadow-sm group-hover:shadow-none border border-[#FFF8F5]  p-3 bg-[#FFF8F5] transition-all ease-in">
        <Image
          src={props.imgSrc}
          alt="pic"
          width={500}
          height={500}
          className="rounded-md"
        />
        <h1 className="font-dmSans text-[#604533] my-2 text-xl  px-3">
          {props.header}
        </h1>
        <p className="my-2 px-3">{props.children}</p>
      </div>
    </div>
  );
};
export default BlogCards;
