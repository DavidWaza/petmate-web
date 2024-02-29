import CardCurve from "../shared/CardCurve/CardCurve";

const cardDetails = [
  {
    imgsrc: "/images/carry-dog.png",
    desc: "Easy access to pet adoption, navigating to find the perfect pet for your home",
    link: "#",
  },
  {
    imgsrc: "/images/friend-dog.png",
    desc: "Learning how to find the perfect mate for your pet",
    link: "#",
  },
  {
    imgsrc: "/images/vet-dog.png",
    desc: "On-call veterinary & grooming services.",
    link: "#",
  },
];
const CareSection = () => {
  return (
    <div className="lg:px-[20rem] px-10">
      <h1 className="font-dmSans text-center text-[#604533] lg:text-3xl text-2xl px-20">
        Caring is the new Marketing
      </h1>
      <p className="py-5 text-xl">
        Petmate provides the necessary services to take away all the hassle of
        trying to adopt, mate or groom your pet. This also provides pick-ups and
        drop-offs of pet from appointment, also displays geographical locations
        and of clinics nearby.
      </p>
      <div className="my-5">
        <div className="grid lg:grid-cols-3 gap-5">
          <>
            {cardDetails.map((details, index) => (
              <CardCurve imgSrc={details.imgsrc} link="#" key={index}>
                {details.desc}
              </CardCurve>
            ))}
          </>
        </div>
      </div>
    </div>
  );
};
export default CareSection;
