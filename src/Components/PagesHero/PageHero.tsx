interface PageProps {
  pageExt: string;
}

const PageHero = (props: PageProps) => {
  return (
    <>
      <div className="bg-about-hero"></div>
      <div className="w-[20rem] bg-white z-10 -mt-10 py-7 rounded-t-lg m-auto">
        <h1 className="text-[#604533] text-4xl text-center font-dmSans">
          {props.pageExt}
        </h1>
      </div>
    </>
  );
};
export default PageHero;
