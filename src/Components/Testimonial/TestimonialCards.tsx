import Image from "next/image";

interface CardsProps {
  imgSrc: string;
  name: string;
  location: string;
  children: React.ReactNode;
}
const TestimonialCards = ({ imgSrc, name, location, children }: CardsProps) => {
  return (
    <div className="bg-white rounded-2xl w-full py-20 px-10">
      <div className="lg:flex gap-5">
        <Image
          src={`/images/${imgSrc}`}
          alt="nat"
          width={300}
          height={300}
          className="rounded-full h-[50px] w-[50px]"
        />
        <div>
          <h1 className="font-dmSans text-[#604533] text-xl w-full">{name}</h1>
          <p className="">{location}</p>
        </div>
      </div>
      <p className="mt-5">{children}</p>
    </div>
  );
};
export default TestimonialCards;
