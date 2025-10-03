import React from "react";
import Reveal from "../../components/Reveal";

export default function DivSubsection  () {
  const statistics = [
    {
      number: "127",
      label: "Properties Build",
    },
    {
      number: "300+",
      label: "Happy Customers",
    },
    {
      number: "10",
      label: "Years Of Experience",
    },
  ];

  const images = [
    {
      className: "w-[430px] h-[434px] top-0 left-0",
      alt: "Rectangle",
    },
    {
      className: "w-[519px] h-[405px] top-[336px] left-[47px]",
      alt: "Rectangle",
    },
    {
      className: "w-[163px] h-[259px] top-[57px] left-[450px]",
      alt: "Rectangle",
    },
  ];

  return (
    <section className="flex items-center min-[1500px]:justify-between gap-[73px] max-[1000px]:gap-[30px] max-[1000px]:flex-col max-[1000px]:items-start w-full relative px-[150px] max-[1500px]:px-[100px] pt-[150px] pb-[170px] max-[1100px]:px-[50px] max-[1100px]:pt-[100px] max-[1100px]:pb-[120px] max-[767px]:px-[25px] max-[1000px]:py-[60px] max-[767px]:py-10">
      <Reveal className="w-[713px] max-[1500px]:w-[613px] max-[1000px]:w-[100%] max-[1000px]:h-[500px] max-[767px]:h-[300px] h-[741px] delay-0">
             <img src="/div-subsection.png" className="w-full h-full max-[1100px]:w-[500px] max-[1000px]:w-[100%]" alt="" />
      </Reveal>

      <div className="flex flex-col items-start gap-12 max-[1000px]:gap-8 relative flex-[0_0_auto]">
        <Reveal className="delay-100">
          <h2 className="w-[554px] max-[1100px]:w-[400px] max-[1000px]:w-[100%]   font-THICCCBOI font-bold text-neutral-800 text-[50px] max-[1100px]:text-[38px] max-[1100px]:leading-[50px] max-[767px]:text-[28px] max-[767px]:leading-[40px]  tracking-[0] leading-[62.5px]">
          With Us Help You Find Your Dream Home
          </h2>
        </Reveal>

        <Reveal className="delay-200">
        <p className="w-[478px] max-[1100px]:w-[350px] max-[1000px]:w-[100%]   text-xl max-[1100px]:text-lg leading-[30px] max-[767px]:text-[16px] max-[1100px]:leading-[24px]  font-THICCCBOI font-medium text-neutral-800 tracking-[0]">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Ut Aliquam,
          Purus Sit Amet Luctus Venenatis, Lectus Magna.
        </p>
        </Reveal>

        <Reveal className="delay-300 max-[500px]:w-full">
        <div className="flex items-start gap-7 relative flex-[0_0_auto] max-[1100px]:gap-5 max-[500px]:flex-col max-[500px]:items-center max-[500px]:w-full">
          {statistics.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center gap-4 relative flex-[0_0_auto]">
                <div className="w-fit  font-THICCCBOI font-bold text-neutral-800 text-[56px] max-[1100px]:text-[42px] max-[1100px]:leading-[42px] max-[767px]:text-[34px] max-[767px]:leading-[34px]  text-center tracking-[0] leading-[56px] whitespace-nowrap">
                  {stat.number}
                </div>

                <div className="w-fit opacity-70 font-THICCCBOI font-regular text-neutral-800 text-lg max-[1100px]:text-base max-[1100px]:leading-[20px] max-[767px]:text-[14px] max-[767px]:leading-[18px]  text-center tracking-[0] leading-[22.5px] whitespace-nowrap">
                  {stat.label}
                </div>
              </div>

              {index < statistics.length - 1 && (
                <img
                  className="w-px h-[95px] object-cover max-[500px]:rotate-[90deg] max-[500px]:h-[40px]"
                  alt="Line"
                  src="/line-19.svg"
                />
              )}
            </React.Fragment>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
};
