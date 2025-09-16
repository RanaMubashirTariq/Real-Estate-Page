
import Link from "next/link";
import React from "react";

export default function FooterSubsection  () {
  const footerMenuColumn1 = [
    { name: "Home", id:'#' },
    { name: "About", id:'#about' },
    { name: "Properties", id:'#properties'  },
    { name: "Agents", id:'#agents' },
    { name: "Blog",  id:'#blog' },
    {name :"Agencts Single", id:'agents single'}
  ];

  const footerMenuColumn2 = [
    "Blog",
    "Blog post",
    "Contact",
    "FAQs",
    "Coming Soon",
    "Subscribe us",
  ];

  const socialLinks = [
    { icon: '/facebook.png', name: "Facebook" },
    { icon: '/twitter.png', name: "Twitter" },
    { icon: '/instagram.png', name: "Instagram" },
    { icon: '/linkin.png', name: "LinkedIn" },
    { icon: '/youtube.png', name: "YouTube" },
  ];

  return (
    <footer className="relative w-full h-auto bg-neutral-800 mt-[140px] max-[1100px]:mt-[100px] max-[1000px]:mt-[60px] max-[767px]:mt-10">
      <div className="relative w-full h-[656px] max-[1100px]:h-[620px] max-[900px]:h-auto">
        <img
          className="absolute w-full h-[656px] top-0 left-0 object-cover inset-0 max-[900px]:h-full"
          alt="Bg"
          src="/bg.svg"
        />

        <img
          className="absolute w-full h-px top-[532px] max-[1300px]:top-[550px] max-[1100px]:top-[500px]  left-0  max-[900px]:top-[622px] max-[767px]:top-[450px] max-[500px]:top-[450px] max-[500px]:top-[450px] max-[420px]:top-[720px]"
          alt="Divider"
          src="/divider.svg"
        />


        <div className="w-full flex items-start justify-between max-[900px]:flex-col gap-5 px-[100px] pt-[120px] max-[1100px]:pt-[80px] max-[767px]:pt-10  max-[1100px]:px-[50px] max-[767px]:px-[25px] relative z-20">
        <div className="w-full flex flex-col items-start gap-6 relative">
               
               <div className="flex items-center">
                 <img className="w-[176px] h-10 max-[767px]:w-[120px]" alt="Logo icon" src="/logo.png" />
               </div>
       
               <div className="w-[338px] max-[1100px]:w-[270px] max-[767px]:w-[100%]  opacity-70 font-THICCCBOI font-regular text-lg max-[1100px]:text-[16px] max-[1100px]:leading-[28px] max-[767px]:text-sm max-[767px]:leading-[26px] leading-[30px] text-neutral-100 tracking-[0]">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doin
                 tempor incididunt labore et magna
               </div>
               </div>
       
               <div className="flex items-start gap-[100px] max-[1100px]:gap-10 max-[900px]:w-full max-[500px]:flex-wrap">
                 <div className="flex flex-col items-start gap-10 max-[767px]:gap-5">
                   <div className="font-THICCCBOI font-bold text-xl max-[1100px]:text-[20px] max-[767px]:text-lg max-[767px]:leading-[20px]  leading-[22px] text-neutral-100 tracking-[0]">
                     Footer Menu
                   </div>
       
                   <div className="flex items-start gap-[100px] max-[767px]:gap-10">
                   <div className="flex flex-col items-start gap-6 max-[767px]:gap-4">
                    {footerMenuColumn1.map((item, index) => (
                      <Link
                        key={index}
                        href={item.id}
                        className="opacity-70 font-THICCCBOI font-regular text-neutral-100 text-lg 
                          max-[1100px]:text-[16px] max-[767px]:text-sm max-[767px]:leading-[18px]  
                          text-center tracking-[0] leading-5 whitespace-nowrap cursor-pointer 
                          hover:opacity-100 transition-opacity"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

       
                     <div className="flex flex-col items-start gap-6 max-[767px]:gap-4">
                       {footerMenuColumn2.map((item, index) => (
                         <div
                           key={index}
                           className="opacity-70 font-THICCCBOI font-regular text-neutral-100 text-lg max-[1100px]:text-[16px] max-[767px]:text-sm max-[767px]:leading-[18px] text-center tracking-[0] leading-5 whitespace-nowrap cursor-pointer hover:opacity-100 transition-opacity"
                         >
                           {item}
                         </div>
                       ))}
                     </div>
                   </div>
                 </div>
       
                 <div className="flex flex-col items-start gap-10 max-[767px]:gap-5">
                   <div className="font-THICCCBOI font-bold text-xl max-[1100px]:text-[18px] leading-[22px] max-[767px]:text-base max-[767px]:leading-[20px] text-neutral-100 tracking-[0]">
                     Follow us
                   </div>
       
                   <div className="flex flex-col items-start relative z-11">
                     {socialLinks.map((social, index) => (
                       <div
                         key={index}
                         className="flex items-center gap-px cursor-pointer hover:opacity-80 transition-opacity"
                       >
                              <div className="w-12 h-12  flex items-center justify-center">
                              <img src={social.icon} alt={social.name} className="w-12 h-12 object-cover" />
                              </div>

                         <div className="opacity-70 font-THICCCBOI font-regular text-neutral-100 text-lg max-[1100px]:text-base max-[767px]:text-sm max-[767px]:leading-[18px] text-center tracking-[0] leading-5 whitespace-nowrap">
                           {social.name}
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
               </div>
        </div>

        

        <div className=" w-full  mt-[172px] max-[900px]:mt-[100px]  px-[100px] max-[1100px]:px-[50px] max-[767px]:px-[25px] max-[767px]:mt-[50px] relative z-11">
          <div className="font-THICCCBOI font-normal text-neutral-100 text-lg max-[1100px]:text-[16px] max-[767px]:text-sm  text-center tracking-[0] leading-[18px]">
            <span className="font-medium text-white leading-[0.1px]">
              Copyright © EstatePro | Designed by{" "}
            </span>

            <span className="font-medium text-[#f15a29] leading-[0.1px] underline">
              Kartik Bansal
            </span>

            <span className="font-medium text-white leading-[0.1px]">
              {" "}
              - Powered by{" "}
            </span>

            <span className="font-medium text-[#f15a29] leading-[30px] underline">
              Figma
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
