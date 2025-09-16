

export default function Marquee(){

    const trustedCompanies = [
        {
          src: "/company-1.png",
          alt: "Company 1",
          className: "w-[138px] h-[27px] max-[767px]:w-[100px]",
        },
        {
          src: "/company-2.png",
          alt: "Company 2",
          className: "w-[127px] h-[29px] max-[767px]:w-[100px]",
        },
        {
          src: "/company-3.png",
          alt: "Company 3",
          className: "w-[142px] h-[35px] max-[767px]:w-[100px]  max-[767px]:h-[30px]",
        },
        {
          src: "/company-4.png",
          alt: "Company 4",
          className: "w-[136px] h-[35px] max-[767px]:w-[100px]  max-[767px]:h-[30px]",
        },
        {
          src: "/company-5.png",
          alt: "Company 5",
          className: "w-28 h-[37px] max-[767px]:w-[100px] max-[767px]:h-[30px]",
        },
      ];



    return(
        <>
          <section className="inline-flex items-center gap-[172px] max-[1000px]:gap-10 max-[767px]:flex-col relative py-[120px] px-[100px] max-[1100px]:py-[80px] max-[1100px]:px-[50px] max-[1000px]:py-[60px] max-[500px]:py-10 max-[767px]:px-[25px] w-full">
        <h2 className="w-[200px] font-THICCCBOI font-semibold text-neutral-800 text-[32px] max-[1000px]:text-[28px] max-[767px]:text-[24px] max-[767px]:text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Trusted by
        </h2>

        <div className="w-[911px] overflow-hidden max-[1000px]:w-[1200px]">
          <div className="flex items-center gap-16  animate-marquee will-change-transform">
            {[...trustedCompanies , ...trustedCompanies , ...trustedCompanies , ...trustedCompanies].map((company, index) => (
              <img
                key={`company-${index}`}
                className={`${company.className} object-cover  max-[767px]:object-contain flex-none`}
                alt={company.alt}
                src={company.src}
              />
            ))}
          </div>
        </div>
      </section>

          <div className="px-[100px] w-full  max-[1100px]:px-[50px]  max-[767px]:px-[25px]">
          <img
        className=" w-full h-px  object-cover"
        alt="Line"
        src="/line-6.svg"
      />
          </div>
        </>
    )
}