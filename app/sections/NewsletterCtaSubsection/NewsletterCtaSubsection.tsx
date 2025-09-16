import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export default function NewsletterCtaSubsection  () {
  return (
    <div className="w-full px-[100px] max-[1100px]:px-[50px] max-[767px]:px-[25px] pt-[150px] max-[1100px]:pt-[150px] max-[1000px]:pt-[100px] max-[767px]:pt-10">
         <section className="w-full max-w-[1240px] h-[354px] max-[500px]:h-[300px] bg-[#f15a29] rounded-3xl overflow-hidden relative">
        <img src="/group-1.png" className="w-full h-full absolute inset-0" alt="" />
      <div className="relative h-[354px] bg-[100%_100%]">
        <h2 className="absolute w-[450px] max-[1100px]:w-[400px] max-[767px]:w-[300px] top-[123px] max-[1100px]:top-[70px] max-[500px]:top-10 left-[100px] max-[1300px]:left-[50px] max-[767px]:left-[25px] font-THICCCBOI font-bold text-neutral-100 text-5xl max-[1100px]:text-[38px] max-[1100px]:leading-[43px] max-[767px]:text-[28px] max-[767px]:leading-[34px] tracking-[0] leading-[53px]">
          Subscribe to our weekly newsletter
        </h2>

        <div className="absolute w-[479px] max-[600px]:w-[400px] max-[500px]:w-[300px] max-[400px]:w-[280px] max-[365px]:w-[250px] max-[330px]:w-[220px] max-[500px]:h-[60px] h-[86px] top-[134px] max-[1100px]:top-[220px] max-[500px]:top-[150px] right-[100px] max-[1300px]:right-[50px] max-[767px]:right-[25px] bg-neutral-100 rounded-2xl border border-solid border-[#00000033] shadow-general-shadow-02">
          <Input
            placeholder="Enter email address"
            className="absolute w-full h-full top-0 left-0 bg-transparent border-none shadow-none text-lg max-[1100px]:text-[base] max-[767px]:text-sm font-THICCCBOI font-normal text-neutral-800 placeholder:text-neutral-800 placeholder:opacity-50 px-[27px] py-[30px] focus-visible:ring-0 focus-visible:ring-offset-0"
            defaultValue=""
          />

          <Button className="inline-flex items-center justify-center gap-1 px-8 py-5 max-[500px]:px-4 max-[500px]:py-4 absolute top-[13px] left-[308px] max-[500px]:top-[70px] max-[500px]:left-[90px] max-[400px]:left-[80px] max-[365px]:left-[60px] max-[350px]:left-[60px] max-[330px]:left-[40px]  max-[600px]:left-[238px] bg-[#f15a29] rounded-xl shadow-[inset_5px_5px_11px_#00000040] h-auto hover:bg-[#f15a29]/80">
            <span className="relative w-fit mt-[-1.00px] font-THICCCBOI font-bold text-neutral-100 text-base max-[767px]:text-sm text-center tracking-[0] leading-[18px] whitespace-nowrap">
              Get in Touch
            </span>
          </Button>
        </div>
      </div>
    </section>
    </div>
  );
};
