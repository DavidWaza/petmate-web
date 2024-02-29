import Button from "../shared/Button/Button";
import Image from "next/image";
const GroomSection = () => {
  return (
    <div className="lg:px-[20rem] px-10 my-20">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="pt-20">
          <h1 className="font-dmSans text-[#604533] lg:text-3xl text-2xl">
            Veterinary & Grooming Services
          </h1>
          <p className=" py-5 text-xl ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quos
            atque eum voluptate, alias, nihil assumenda ipsa, neque delectus
            natus debitis tempore provident voluptates. Pariatur corporis fugit
            aperiam dicta. Corporis!
          </p>
          <Button bgColor="#292f36" textColor="white" size="sm" icon={true}>
            Explore
          </Button>
        </div>
        <div>
            <Image src="/images/doc-dog.jpg" alt="photo" width={500} height={500} className="rounded-se-[250px] rounded-es-[100px]"/>
        </div>
      </div>
    </div>
  );
};
export default GroomSection;
