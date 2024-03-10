import Button from "../shared/Button/Button";

const Hero = () => {
  return (
    <div className="bg-img">
      <div className="grid lg:grid-cols-2">
        <div className="custom-container m-auto lg:rounded-ee-[150px] lg:rounded-e-3xl bg-white my-[150px] p-[30px] lg:w-[66%]">
          <h1 className="font-dmSans lg:!text-[40px] !text-[20px]">
            Helping you find the <br /> perfect{" "}
            <span className="text-[#604533]">Mate!</span>
          </h1>
          <p className="my-5 lg:text-[1.36rem] text-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
            ipsam facere perferendis quidem provident vel numquam ex nostrum,
            sit voluptatum voluptatibus incidunt exercitationem aperiam
            consequuntur. Quisquam ullam itaque ea magnam!
          </p>
          <Button textColor="" bgColor="#604533" size="xl" icon={true}>
            Get started
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default Hero;
