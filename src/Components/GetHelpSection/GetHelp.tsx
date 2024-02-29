import Button from "../shared/Button/Button";

const GetHelpSection = () => {
  return (
    <div>
      <div className="bg-[#FFF8F5] rounded-ss-[150px] w-full py-20 my-20">
        <h1 className="font-dmSans text-center text-[#604533] lg:text-3xl text-2xl px-20">
          Need help Navigating your way?
        </h1>
        <p className="lg:px-[20rem] py-5 text-xl px-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto,
          perspiciatis, similique ipsum architecto dignissimos nobis officia
          dolorum tempora accusantium dolores totam nulla illum. Vitae numquam
          nesciunt laborum praesentium ex!
        </p>
        <div className="flex justify-center my-5">
          <Button bgColor="#292f36" textColor="white" size="sm" icon={true}>
            Get Help
          </Button>
        </div>
      </div>
    </div>
  );
};
export default GetHelpSection;
