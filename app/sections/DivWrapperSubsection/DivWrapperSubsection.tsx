import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export default function DivWrapperSubsection  ()  {
  return (
    <section className="w-full h-[1050px] max-[1000px]:h-[850px] max-[600px]:h-[700px] max-[500px]:h-[750px] relative bg-cover bg-[50%_50%]">
        <img src="/back-img.png" className="w-full h-full " alt="" />
      <Button className="cursor-pointer transform transition-transform duration-300 hover:scale-90  inline-flex items-center justify-center gap-2.5 px-8 py-4 absolute top-[880px] max-[1000px]:top-[760px] max-[767px]:top-[580px] max-[500px]:top-[650px] max-[500px]:right-[130px] max-[400px]:right-[100px] right-[617px] max-[1300px]:right-[550px] max-[1100px]:right-[400px] max-[900px]:right-[350px] max-[800px]:right-[300px] max-[600px]:right-[200px] max-[530px]:right-[170px] bg-[#f15a29] rounded-[5px] shadow-[inset_5px_5px_8px_#00000040] h-auto">
        <span className="relative w-fit mt-[-1.00px] [font-family:'THICCCBOI-SemiBold',Helvetica] font-semibold text-neutral-100 text-lg max-[1000px]:text-base tracking-[0.18px] leading-[18px] whitespace-nowrap">
          Get In Touch
        </span>

        <img
          className="relative w-7 h-[14.73px] mr-[-1.00px]"
          alt="Vector"
          src="/vector-710.svg"
        />
      </Button>

      <div className="absolute w-[1246px] h-[700px] top-[120px] max-[1000px]:top-[60px] max-[767px]:top-10 left-[100px] max-[1100px]:left-[50px] max-[767px]:left-[25px]">
        <div className="flex flex-col w-[900px] max-[500px]:w-[400px] items-start gap-[49px] absolute top-0 left-0  max-[500px]:pr-[25px]">
          <h2 className="relative self-stretch  font-THICCCBOI font-bold text-neutral-800 text-[70px] max-[1100px]:text-[54px] max-[767px]:text-[42px] tracking-[0] leading-[normal]">
            What our clients say
          </h2>

          <img
            className="self-stretch w-full h-[570px] max-[1100px]:h-[400px] max-[767px]:h-[250px] max-[1000px]:w-[800px]  max-[900px]:w-[600px] max-[600px]:w-[500px] max-[530px]:w-[480px] max-[500px]:w-[300px] relative object-cover rounded-[12px]"
            alt="Image"
            src='/middle-img.png'
          />
        </div>

        <Card className="absolute w-[586px] h-[402px] max-[500px]:w-[300px] max-[500px]:h-[350px] max-[767px]:h-[260px] max-[1000px]:w-[480px] top-[214px] right-[100px] max-[1300px]:right-[150px] max-[1100px]:right-[300px] max-[1000px]:right-[400px]  max-[900px]:right-[500px] max-[800px]:right-[550px] max-[600px]:right-[750px] max-[530px]:right-[770px] max-[500px]:right-[900px] max-[365px]:right-[940px] max-[330px]:right-[960px] border-none">
          <CardContent className="relative w-[586px] max-[500px]:w-[300px] max-[500px]:h-[350px] max-[1000px]:w-[480px] h-[402px] max-[767px]:h-[260px] bg-neutral-100 rounded-xl border border-solid border-[#acacac] p-0">
            <blockquote className="absolute w-[403px] max-[500px]:w-[100%] top-[46px] max-[767px]:top-[30px] max-[500px]:left-5 left-[46px] [-webkit-text-stroke:1px_#acacac] font-THICCCBOI font-semibold text-neutral-800 text-[28px] max-[1000px]:text-[24px] max-[767px]:text-xl tracking-[0] leading-[normal]">
              &quot;They did an amazing job for our house.&quot;
            </blockquote>

            <p className="absolute w-[484px] max-[1000px]:w-[430px] max-[500px]:w-[250px] max-[500px]:left-5 top-[142px] max-[767px]:top-[70px] max-[500px]:top-[100px] left-[46px] [-webkit-text-stroke:1px_#acacac] font-THICCCBOI font-medium text-neutral-800 text-lg max-[1000px]:text-base max-[767px]:text-sm max-[1000px]:leading-[30px] max-[767px]:leading-[26px] tracking-[0] leading-[32.4px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit cilisis
              pretium leo pellentesque ultrices est varius amet rhoncus sed
              euismod sit id purus elementum nulla tincidunt massa vel.
            </p>

            <Avatar className="absolute w-[58px] h-[58px] top-[303px] max-[767px]:top-[180px] max-[500px]:top-[270px] max-[500px]:left-5 left-[47px] max-[1000px]:w-12 max-[1000px]:h-12">
              <AvatarImage className="object-cover" alt="Ellipse" src='/Ellipse-198.png' />
              <AvatarFallback>TS</AvatarFallback>
            </Avatar>

            <div className="absolute w-8 h-0.5 top-[331px] max-[767px]:top-[200px] max-[500px]:top-[300px] left-28 max-[500px]:left-[80px] bg-neutral-800 border border-solid border-[#acacac]" />

            <div className="absolute top-80 left-[149px] max-[500px]:left-[120px] max-[500px]:top-[290px] max-[767px]:top-[190px] [-webkit-text-stroke:1px_#acacac] font-THICCCBOI font-semibold text-neutral-800 text-xl max-[1000px]:text-[18px] max-[767px]:text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
              Tony Stark
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
