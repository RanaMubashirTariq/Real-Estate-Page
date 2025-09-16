'use client'
import { ArrowRightIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import Link from "next/link";

export default function HeaderSubsection  () {
        
     const [isOpen , setIsOpen] = useState(false)
     
  const navigationItems = [
    { name: "Home", id:'#home' },
    { name: "About", id:'#about' },
    { name: "Properties", id:'#properties'  },
    { name: "Agents", id:'#agents' },
    { name: "Blog",  id:'#blog' },
  ];



  

  return (
    <header className="flex  w-full items-center justify-between px-[100px] max-[1100px]:px-[50px] py-8 max-[767px]:px-[25px] max-[767px]:py-5  w-full relative z-50">
        <div className="flex w-full max-w-[664px] items-center gap-10">
          <div className="inline-flex items-center  relative flex-[0_0_auto]">
            <img className="relative w-[176.97px] max-[767px]:w-[140px] h-[37.97px]" src='/logo.png' alt="Group" />
          </div>

          <nav className="max-[1000px]:hidden flex items-center justify-center gap-8  relative flex-[0_0_auto]">
  {navigationItems.map((item, index) => (
    <Link
      key={item.name}
      href={item.id}
      className={`relative w-fit ${
        index === 0 ? "mt-[-1.00px]" : ""
      } opacity-70 font-THICCCBOI font-regular text-neutral-100 text-lg text-center tracking-[0] leading-5 whitespace-nowrap hover:opacity-100 transition-opacity`}
    >
      {item.name}
    </Link>
  ))}
</nav>

        </div>

        <div className=" max-[1000px]:hidden flex w-[156px] h-[58px] items-center justify-end gap-4">
          <div className="inline-flex items-start relative flex-[0_0_auto]">
            <Button className="cursor-pointer transform transition-transform duration-300 hover:scale-90  inline-flex items-center justify-center gap-1 px-6 py-5 relative flex-[0_0_auto] bg-neutral-100 rounded-xl border border-solid border-black shadow-[inset_5px_5px_5px_#00000040] hover:bg-neutral-200 h-auto">
              <div className="relative w-fit mt-[-1.00px] font-THICCCBOI font-bold text-neutral-800 text-base text-center tracking-[0] leading-[18px] whitespace-nowrap">
                Get started
              </div>

              <ArrowRightIcon className="relative w-3.5 h-3.5" />
            </Button>
          </div>
        </div>



        {/* Mobile menu button (visible on mobile) */}
{/* Mobile Toggle Button */}
<button
  onClick={() => setIsOpen(!isOpen)}
  className="hidden max-[1000px]:flex flex-col justify-center items-center gap-1 w-8 h-8"
  aria-label="Toggle Menu"
>
  {isOpen ? (
    // Close (X) icon
    <span className="text-white text-2xl font-bold">&times;</span>
  ) : (
    // Hamburger icon
    <>
      <span className="w-6 h-[2px] bg-white rounded"></span>
      <span className="w-6 h-[2px] bg-white rounded"></span>
      <span className="w-6 h-[2px] bg-white rounded"></span>
    </>
  )}
</button>


 {/* Mobile menu (absolute positioned) */}
 {isOpen && (
   <div className="hidden max-[1000px]:block absolute top-[100px] right-0 right-5 bg-[#070707] w-[180px] pl-5 py-5 rounded-[12px] z-50">
           <div className="flex flex-col items-start gap-5">
           <nav className="flex flex-col items-start gap-8 max-[1000px]:gap-4 relative flex-[0_0_auto]">
  {navigationItems.map((item, index) => (
    <Link
      key={item.name}
      href={item.id}
      onClick={() => setIsOpen(false)} // close menu after clicking
      className={`relative w-fit ${
        index === 0 ? "mt-[-1.00px]" : ""
      } opacity-70 font-THICCCBOI font-regular text-neutral-100 text-lg max-[1000px]:text-sm text-center tracking-[0] leading-5 whitespace-nowrap hover:opacity-100 transition-opacity`}
    >
      {item.name}
    </Link>
  ))}
</nav>


          <div className=" flex w-[156px] h-[58px] max-[1000px]:w-[120px] max-[1000px]:h-[40px] items-start justify-start gap-4">
          <div className="inline-flex items-start relative">
            <Button className="cursor-pointer transform transition-transform duration-300 hover:scale-90  inline-flex items-center justify-center gap-1 px-6 py-5 max-[1000px]:px-2 max-[1000px]:py-2 relative flex-[0_0_auto] bg-neutral-100 rounded-xl border border-solid border-black shadow-[inset_5px_5px_5px_#00000040] hover:bg-neutral-200 h-auto">
              <div className="relative w-fit mt-[-1.00px] font-THICCCBOI font-bold text-neutral-800 text-14 text-center tracking-[0] leading-[18px] whitespace-nowrap">
                Get started
              </div>

              <ArrowRightIcon className="relative w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
           </div>
   </div>
 )}
    </header>
  );
};
