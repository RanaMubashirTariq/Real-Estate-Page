'use client'
import React from "react";
import Reveal from "../../components/Reveal";
import Counter from "../../components/Counter"; 
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {motion} from 'framer-motion'

export default function FrameSubsection  () {
  const statistics = [
    {
      number: "1200",
      label: "Premium Product",
    },
    {
      number: "4500",
      label: "Happy Customer",
    },
    {
      number: "240",
      label: "Award Winning",
    },
  ];

  return (
    <section className="w-full relative px-[150px] max-[1500px]:px-[100px] max-[1100px]:px-[50px] max-[767px]:px-[25px] max-[1100px]:pt-[60px] max-[1000px]:pt-10 max-[767px]:pt-5 pt-[98px] ">
      <div className="flex items-center justify-between w-full gap-10 max-[767px]:gap-4 max-[1000px]:flex-col max-[1000px]:items-start">
        <Reveal className="flex-1 max-w-[628px] delay-0">
          <h1 className="font-THICCCBOI font-bold text-neutral-100 text-[90px] max-[1300px]:text-[78px] max-[1300px]:leading-[92px] max-[1100px]:text-[60px] max-[1100px]:leading-[74px] max-[1000px]:text-[48px] max-[1000px]:leading-[62px] max-[767px]:text-[36px] max-[767px]:leading-[48px] tracking-[0] leading-[104.4px]">
            <span className="text-white">The Best Place To Find Your </span>
            <span className="text-[#f15a29]">Dream House</span>
          </h1>
        </Reveal>

        <div className="flex flex-col items-start gap-8 flex-1 w-full max-w-[472px]">
          <Reveal className="flex flex-col items-start gap-6 w-full max-[1300px]:gap-5 max-[767px]:gap-3 delay-100">
            <p className="font-THICCCBOI font-normal text-neutral-100 text-[22px] max-[1300px]:text-[20px] max-[1300px]:leading-[36px] max-[1100px]:text-[18px] max-[1100px]:leading-[34px] max-[767px]:text-base max-[767px]:leading-[30px] tracking-[0] leading-[39.6px]">
              We Are Real Estate Agency That Willhelp You Designing A Modern And
              Minimalist Dream House, Let&apos;s Discuss.
            </p>

              <motion.div 
                  whileHover={{scale:0.9}}
                  whileTap={{scale:1}}
                  className="inline-flex items-center justify-center"
                 >
              <Button
                 
            className="cursor-pointer h-auto max-[767px]:h-10  gap-1 px-6 py-5 max-[767px]:px-4 max-[767px]:py-4 bg-[#f15a29] rounded-xl shadow-[inset_5px_5px_6px_#00000040] hover:bg-primary-color/90">
              <span className="font-THICCCBOI font-bold text-neutral-100 text-base max-[767px]:text-sm text-center tracking-[0] leading-[18px] whitespace-nowrap">
                Get in Touch
              </span>
            </Button>
              </motion.div>
          </Reveal>

          <Reveal className="flex items-center gap-[25px] w-full max-[500px]:flex-col max-[500px]:gap-4 delay-200">
            {statistics.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col gap-[10px]">
                  <div className="font-THICCCBOI font-semibold text-neutral-100 text-[28px] max-[767px]:text-[24px]  tracking-[0.28px] leading-[normal] whitespace-nowrap">
                   <div className="flex items-start gap-px">
                   <Counter
                      end={Number(stat.number)}
                      duration={2.5}
                      className="text-white tracking-[0.08px]"
                    />
                    <span className="text-[#f15a29] tracking-[0.08px]">+</span>
                   </div>
                    
                  </div>
                  <div className="opacity-80 font-THICCCBOI font-semibold text-neutral-100 text-base max-[767px]:text-[14px] tracking-[0.16px] leading-[normal] whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
                {index < statistics.length - 1 && (
                  <img
                     src='/line-hero.png'
                    className="h-16 w-px bg-neutral-100/20 max-[500px]:rotate-[90deg]"
                  />
                )}
              </React.Fragment>
            ))}
          </Reveal>
        </div>
      </div>
      <Reveal className="w-full h-[465px] pt-[60px] max-[1000px]:h-[350px] max-[767px]:h-[250px] max-[767px]:pt-[30px] delay-300">
          <img src="/reactangle.jpg" className="w-full h-[465px] max-[1000px]:h-[350px] max-[767px]:h-[250px] object-cover rounded-[10px] " alt="" />
      </Reveal>

      <Reveal className="absolute w-[654px] h-[87px] max-[900px]:w-[500px] max-[500px]:w-[350px] max-[400px]:w-[300px] max-[358px]:w-[270px] max-[900px]:h-[60px] max-[767px]:h-[140px]
       top-[891px] max-[1300px]:top-[860px] max-[1100px]:top-[780px] max-[1100px]:left-[80px] max-[1000px]:top-[830px]   max-[365px]:left-[30px]  max-[767px]:w-[400px] max-[767px]:top-[570px]
        max-[500px]:top-[900px] max-[500px]:left-[40px] left-[132px] max-[358px]:left-[40px] max-[330px]:left-[25px] z-11 delay-400">
            <div className="relative w-[654px] h-[87px]  max-[900px]:w-[500px] max-[500px]:w-[350px] max-[400px]:w-[300px] max-[358px]:w-[270px] max-[900px]:h-[60px] max-[767px]:h-[140px] max-[767px]:w-[400px]    bg-neutral-100 rounded-[10px]">
              <Input
                className="absolute top-[30px]  max-[900px]:top-[19px] left-[74px] h-[60px] max-[900px]:left-[54px] w-full font-THICCCBOI font-regular text-[#070707]/70 placeholder:text-[#070707]/70  text-[20px] max-[1100px]:text-[18px] max-[1000px]:text-[16px] max-[767px]:text-sm tracking-[0.20px] leading-[28px] border-0 bg-transparent p-0 h-auto focus-visible:ring-0 outline-none shadow-none"
                placeholder="Search by location..."
              />

              <img
                className="absolute w-[35px] h-[35px] top-[26px] left-[26px] max-[900px]:top-[15px] max-[900px]:left-[10px] "
                alt="Ci location"
                src="/ci-location.png"
              />

               <motion.div
                   whileHover={{scale:0.9}}
                   whileTap={{scale:1}}
               className="absolute top-2 right-2 max-[767px]:top-20  max-[767px]:left-2">
               <Button className="cursor-pointer  max-[767px]:w-[100%]  w-[188px] h-[71px] max-[900px]:w-[130px] max-[767px]:h-[40px] max-[900px]:h-[45px]  max-[900px]:py-[15px] pt-[26px] pb-[22px]  bg-[#f15a29] rounded-[10px] shadow-[inset_5px_5px_4px_#00000040] font-THICCCBOI font-bold text-neutral-100 text-xl max-[1100px]:text-[18px] max-[1000px]:text-[16px] max-[767px]:text-sm tracking-[0.20px] leading-[normal] h-auto">
                Search Now
              </Button>
               </motion.div>
            </div>
          </Reveal>
    </section>
  );
};
