import { CalendarIcon, ClockIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

const articleCards = [
  {
     img:'/blog-1.jpg',
    title: "The Future of Real Estate: Trends to Watch Out for in 2023",
    date: "June 12, 2022",
    readTime: "10 min read",
  },
  {
    img:'/blog-2.jpg',
    title: "Top 10 Cities for Real Estate Investment in 2023",
    date: "June 12, 2022",
    readTime: "10 min read",
  },
  {
    img:'/blog-3.jpg',
    title: "Buying vs. Renting: Which Option Makes More Sense in Today's Market?",
    date: "June 12, 2022",
    readTime: "10 min read",
  },
];

export default function SectionComponentNodeSubsection  () {
  return (
    <section className="w-full bg-cover bg-[50%_50%]">
      <img src="/back-img.png" className="w-full h-[1460px] max-[1100px]:h-[1260px] max-[1000px]:h-[1750px] max-[767px]:h-[2030px] max-[500px]:h-[2100px] max-[400px]:h-[2250px] max-[767px]:text-[24px] max-[350px]:h-[2350px] absolute  z-0" alt="" />
      <div className="flex flex-col w-full max-w-[1240px] mx-auto px-4 items-start gap-12 z-11 relative py-[120px] max-[1100px]:py-20 max-[1000px]:py-15 max-[767px]:py-10 px-[50px] max-[767px]:px-[25px]">
        <h2 className="font-THICCCBOI font-bold text-neutral-800 text-[70px] max-[1100px]:text-[54px] max-[767px]:text-[42px] tracking-[0] leading-[normal]">
          Articles &amp; Resources
        </h2>

        <div className="flex flex-col items-start gap-[50px] w-full  ">
          <div className="relative w-full h-[570px] max-[1100px]:h-[450px]">
            <div className="relative h-[570px]">
              <img
                className="w-[900px] h-[570px] max-[1100px]:w-[700px] max-[1100px]:h-[450px] object-cover rounded-xl"
                alt="Featured article image"
                src='/middle-img.png'
              />

              <Card className="w-[640px] max-[1000px]:w-[500px] max-[767px]:w-[350px] max-[400px]:w-[280px] max-[767px]:top-[120px] absolute top-[57px] right-[-100px] max-[1300px]:right-[-50px]  max-[1100px]:right-0  bg-neutral-100 border-[#acacac]">
                <CardContent className="p-12 max-[767px]:p-6 max-[400px]:p-5">
                  <div className="flex flex-col items-start gap-8 max-[500px]:gap-4">
                    <div className="flex flex-col items-start gap-6 w-full">
                      <h3 className="font-THICCCBOI font-semibold text-neutral-800 text-[32px] max-[1100px]:text-[28px] max-[767px]:text-[24px] max-[767px]:leading-[34px] tracking-[0] leading-10">
                        Why a luxury home in a gated community is a better
                        investment option
                      </h3>

                      <p className="opacity-75 text-lg leading-[32.4px] max-[1100px]:text-base max-[1100px]:leading-[28px] max-[767px]:text-[14px] max-[767px]:leading-[24px] font-THICCCBOI font-medium text-neutral-800 tracking-[0]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        cilisis pretium leo pellentesque ultrices est varius
                        amet rhoncus sed euismod sit id purus elementum nulla
                        tincidunt massa vel.
                      </p>
                    </div>

                    <Separator className="w-full h-px bg-[linear-gradient(90deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.7)_50%,rgba(0,0,0,0.1)_100%)] opacity-25" />

                    <div className="inline-flex items-start gap-8 opacity-50 max-[400px]:flex-col max-[500px]:gap-4">
                      <div className="inline-flex items-center justify-center gap-3">
                        <img src='/calender.png' className="w-6 h-6" />
                        <span className="font-THICCCBOI font-regular text-neutral-800 text-lg max-[1100px]:text-base max-[1100px]:leading-[20px] max-[767px]:text-[14px] max-[767px]:leading-[18px] tracking-[0] leading-[22.5px] whitespace-nowrap">
                          June 12, 2022
                        </span>
                      </div>

                      <div className="inline-flex items-center justify-center gap-3">
                        <img src='/clock.png' className="w-6 h-6" />
                        <span className="font-THICCCBOI font-regular text-neutral-800 text-lg max-[1100px]:text-base max-[1100px]:leading-[20px] max-[767px]:text-[14px] max-[767px]:leading-[18px] tracking-[0] leading-[22.5px] whitespace-nowrap">
                          10 min read
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex items-start justify-between w-full gap-6 max-[1000px]:flex-wrap max-[1000px]:justify-center max-[1000px]:pt-[50px] max-[400px]:pt-[130px]">
            {articleCards.map((article, index) => (
              <Card
                key={index}
                className="flex flex-col w-full  h-[473px] max-[767px]:h-auto max-[1100px]:w-[280px] max-[1000px]:w-[300px] max-[767px]:w-[100%] bg-neutral-100 border-[#acacac]"
              >
                <img
                  className="w-full h-60 object-cover rounded-t-xl"
                  alt="Article thumbnail"
                  src={article.img}
                />

                <CardContent className="flex flex-col items-start justify-center gap-8  p-6 flex-1">
                  <h4 className="font-THICCCBOI font-bold text-neutral-800 text-2xl max-[1100px]:text-xl max-[1100px]:leading-[26px] max-[767px]:text-[18px] max-[767px]:leading-[24px] tracking-[0] leading-[30px]">
                    {article.title}
                  </h4>

                  <Separator className="w-full h-px" />

                  <div className="inline-flex items-start gap-4 max-[1100px]:flex-col  max-[767px]:flex-row max-[350px]:flex-col">
                    <div className="inline-flex items-start gap-3 rounded-md">
                      <CalendarIcon className="w-6 h-6" />
                      <span className="opacity-50 font-THICCCBOI font-regular text-neutral-800 text-lg tracking-[0] leading-[22.5px] max-[1100px]:text-[16px] max-[767px]:text-[14px] max-[767px]:leading-[20px] whitespace-nowrap">
                        {article.date}
                      </span>
                    </div>

                    <div className="inline-flex items-start gap-3 rounded-md">
                      <ClockIcon className="w-6 h-6" />
                      <span className="opacity-50 font-THICCCBOI font-regular text-neutral-800 text-lg max-[1100px]:text-base max-[1100px]:leading-[20px] tracking-[0] leading-[22.5px] max-[767px]:text-[14px] max-[767px]:leading-[20px] whitespace-nowrap">
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
