import Image from "next/image";
import HeaderSubsection from "./sections/HeaderSubsection/HeaderSubsection";
import FrameSubsection from "./sections/FrameSubsection/FrameSubsection";
import Marquee from "./sections/Marquee/Marquee";
import FrameWrapperSubsection from "./sections/FrameWrapperSubsection/FrameWrapperSubsection";
import DivWrapperSubsection from "./sections/DivWrapperSubsection/DivWrapperSubsection";
import DivSubsection from "./sections/DivSubsection/DivSubsection";
import NewsletterCtaSubsection from "./sections/NewsletterCtaSubsection/NewsletterCtaSubsection";
import FooterSubsection from "./sections/FooterSubsection/FooterSubsection";
import SectionComponentNodeSubsection from "./sections/SectionComponentNodeSubsection/SectionComponentNodeSubsection";

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-[#ffffff] relative">
       <img
            className="absolute w-[2px] left-[26px] max-[767px]:left-[15px] top-2.5  h-[1000px]  max-[1100px]:h-[900px] max-[760px]:h-[700px] max-[500px]:h-[1100px]"
            alt="Frame"
            src="/line-1.png"
          />
          <img
            className="absolute  w-[2px] right-[26px] max-[767px]:right-[15px]   h-[1000px]  max-[1100px]:h-[900px] max-[760px]:h-[700px] max-[500px]:h-[1100px]"
            alt="Frame"
            src="/line-last.png"
          />
            <div className="w-full bg-[#070707] h-[1200px] max-[1300px]:h-[1150px] max-[1100px]:h-[1050px] max-[760px]:h-[900px] max-[500px]:h-[1300px]">
            <div className="absolute w-[375px] h-[386px] top-0 right-[0px] bg-neutral-100 rounded-[187.5px/193px] blur-[250px] opacity-40" />
            <img
            className="absolute w-full  inset-0 z-0 h-[1200px] max-[1300px]:h-[1150px] max-[1100px]:h-[1050px] max-[760px]:h-[900px] max-[500px]:h-[1300px]"
            alt="Frame"
            src="/frame-line.png"
          />
                    
            <div id="home">
            <HeaderSubsection/>
            <FrameSubsection/>
            </div>
            </div>
            <div id="agents">
            <Marquee/>
            </div>
            <div id="properties">
            <FrameWrapperSubsection/>
            </div>
             <div id="about">
             <DivWrapperSubsection/>
             </div>
            <DivSubsection/>
            <div id="blog">
            <SectionComponentNodeSubsection/>
            </div>
            <NewsletterCtaSubsection/>
            <FooterSubsection/>
    </div>
  );
}
