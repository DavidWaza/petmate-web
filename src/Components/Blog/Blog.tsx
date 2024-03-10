import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import BlogCards from "./BlogCards";

const blogDetails = [
  {
    imgsrc: "/images/running-dog.png",
    header: `What is a Pomeranian?  
      How to identify 
      Pomeranian Dogs`,
    desc: `The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.`,
    link: "#",
  },
  {
    imgsrc: "/images/eat-dog.png",
    header: `Dog Diet You Need To
    Know`,
    desc: `Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.`,
    link: "#",
  },
  {
    imgsrc: "/images/couch-dog.png",
    header: `Why Destroy Furniture
    and How to Prevent It
    Effectively`,
    desc: `Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.`,
    link: "#",
  },
];

const Blog = () => {
  return (
    <div className="lg:px-[10rem] px-10">
      <div className="lg:flex justify-between items-center">
        <div>
          <p>You already know?</p>
          <h1 className="font-dmSans text-[#604533] lg:text-3xl text-2xl">
            Useful Pet Knowledge
          </h1>
        </div>
        <Link href={"#"}>
          <div className="border border-[#604533] rounded-2xl py-4 px-7 flex justify-center items-center gap-5 font-dmSans text-xl my-2">
            View more
            <MdOutlineKeyboardArrowRight />
          </div>
        </Link>
      </div>
      <div className="grid lg:grid-cols-3 my-5 gap-10">
        <>
          {blogDetails.map((details, index) => (
            <BlogCards
              imgSrc={details.imgsrc}
              key={index}
              header={details.header}
            >
              {details.desc.slice(0, 100) + "..."}
            </BlogCards>
          ))}
        </>
      </div>
    </div>
  );
};
export default Blog;
