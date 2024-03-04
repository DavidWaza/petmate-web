import PageHero from "@/Components/PagesHero/PageHero";
import Image from "next/image";
import Button from "@/Components/shared/Button/Button";
import TestimonialCards from "@/Components/Testimonial/TestimonialCards";

interface TestimonialCardsprops {
  imgsrc: string;
  name: string;
  location: string;
  text: string;
}

const TestimonialCardsList: TestimonialCardsprops[] = [
  {
    imgsrc: "nat.jpg",
    name: "Natasha Milt",
    location: "Sydney, USA",
    text: `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
        architecto ad quam dolore quibusdam earum.`,
  },
  {
    imgsrc: "ray.jpg",
    name: "Raymond Galacio",
    location: "Sydney, Australia",
    text: `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
        architecto ad quam dolore quibusdam earum.`,
  },
  {
    imgsrc: "benny.jpg",
    name: "Benny Roll",
    location: "Sydney, New York",
    text: `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
        architecto ad quam dolore quibusdam earum.`,
  },
];
const AboutUs = () => {
  return (
    <>
      <PageHero pageExt="About Us" />
      <div className="my-20 lg:px-[10rem] px-10">
        <h1 className="text-[#604533] text-4xl text-center font-dmSans">
          What you need to know about PetMate
        </h1>
        <p className="text-xl leading-0 lg:text-2xl lg:leading-[40px] my-7">
          Petmate is an organization affiliated with veterinary clinics, to
          promote and aid pet care. This organization improves the general
          health of our furry friends, by creating easy to veterinary clinics
          nearby, on call services, grooming services, adoption services &
          mating. Petmate takes away all the hassle of taking care of our furry
          friends, Ensuring peak health and performance.{" "}
        </p>
        <div className="flex justify-center mt-7">
          <Image
            src={"/images/word-testimonial.png"}
            alt=""
            width={400}
            height={400}
            className="my-7 w-2/3"
          />
        </div>
      </div>
      <div className="lg:px-[10rem] px-10">
        <div className="grid lg:grid-cols-2 gap-10 my-10">
          <div className="pt-20">
            <h1 className="font-dmSans text-[#604533] lg:text-3xl text-2xl">
              What we do
            </h1>
            <p className=" py-5 text-xl ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              quos atque eum voluptate, alias, nihil assumenda ipsa, neque
              delectus natus debitis tempore provident voluptates. Pariatur
              corporis fugit aperiam dicta. Corporis!
            </p>
          </div>
          <div>
            <Image
              src="/images/blanky_dog.jpg"
              alt="photo"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <Image
              src="/images/cuddle_dog.jpg"
              alt="photo"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
          <div className="pt-20">
            <h1 className="font-dmSans text-[#604533] lg:text-3xl text-2xl">
              The End Result
            </h1>
            <p className=" py-5 text-xl ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              quos atque eum voluptate, alias, nihil assumenda ipsa, neque
              delectus natus debitis tempore provident voluptates. Pariatur
              corporis fugit aperiam dicta. Corporis!
            </p>
            <Button bgColor="#292f36" textColor="white" size="sm" icon={true}>
              Our Portfolio
            </Button>
          </div>
        </div>
        <div className="my-10">
          <div className="w-full rounded-3xl bg-[#F4F0EC]">
            <h1 className="font-dmSans text-[#604533] text-center py-10 lg:text-3xl text-2xl">
              What the people think <br /> About us
            </h1>
            <div className="grid lg:grid-cols-3 gap-5 p-10">
              {TestimonialCardsList.map((list, index) => (
                <TestimonialCards
                  key={index}
                  imgSrc={list.imgsrc}
                  name={list.name}
                  location={list.location}
                >
                  {list.text}
                </TestimonialCards>
              ))}
            </div>
          </div>
        </div>
        <div className="my-10">
          <h1 className="font-dmSans  lg:text-5xl text-2xl text-center">
            Creative project? Let&apos;s have <br /> a productive talk.
          </h1>
          <div className="flex gap-5 justify-between my-10">
            <input
              type="text"
              value={""}
              placeholder="Name"
              className="border-b border-black py-5 w-full active:border-none"
            />
            <input
              type="email"
              value={""}
              placeholder="Email"
              className="border-b border-black py-5 w-full"
            />
          </div>
          <div className="">
            <textarea
              value={""}
              placeholder="Hello, i am interested in."
              className="border-b border-black py-20 w-full"
            />
          </div>
          <div className="flex justify-center my-10">
            <Button bgColor="#292f36" textColor="white" size="lg" icon={true}>
              Send Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
