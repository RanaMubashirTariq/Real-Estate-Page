'use client'
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {motion} from 'framer-motion'

export default function FrameWrapperSubsection  ()  {
  const properties = [
    {
      price: "$ 59,345",
      location: "Home in Downtown, Los Angeles",
      sqft: "2500 sqft",
      bedrooms: "3",
      bathrooms: "2",
      image: "/card-1.jpg",
    },
    {
      price: "$ 79,345",
      location: "Home in Downtown, Los Angeles",
      sqft: "3000 sqft",
      bedrooms: "4",
      bathrooms: "2",
      image: "/card-2.png",
    },
    {
      price: "$ 53,542",
      location: "Home in Downtown, Los Angeles",
      sqft: "2500 sqft",
      bedrooms: "3",
      bathrooms: "2",
      image: "/card-3.png",
    },
    {
      price: "$ 79,345",
      location: "Home in Downtown, Los Angeles",
      sqft: "5550 sqft",
      bedrooms: "6",
      bathrooms: "5",
      image: "/card-4.jpg",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-[42px] max-[767px]:gap-[30px] relative px-[100px] pt-[120px] pb-[156px] max-[1100px]:px-[50px] max-[1100px]:py-[80px] max-[1100px]:pb-[100px] max-[767px]:px-[25px] max-[767px]:py-10">
      <header className="flex items-center justify-between w-full max-[767px]:flex-col max-[767px]:items-start gap-4">
        <h2 className="font-THICCCBOI font-bold text-neutral-800 text-[70px] max-[1100px]:text-[54px] max-[1100px]:leading-[67px] max-[767px]:text-[42px] max-[767px]:leading-[56px] tracking-[0] leading-[87.5px]">
          Popular Resident
        </h2>

       <motion.div
         whileHover={{scale:0.9}}
         whileTap={{scale:1}}
         className="hover:border p-2 rounded-[8px] transition"
        >
       <Button
          variant="ghost"
          className="flex items-center gap-2 h-auto p-0 hover:bg-transparent cursor-pointer "
        >
          <span className=" font-THICCCBOI font-regular text-neutral-800 text-base tracking-[0] leading-6">
            Explore All
          </span>
          <img src='/vector-710.png' className="w-7 h-[15px]" />
        </Button>
       </motion.div>
      </header>

      <div className="grid grid-cols-2 max-[767px]:grid-cols-1 gap-5 w-full">
        {properties.map((property, index) => (
          <Card
            key={index}
            className="w-full h-auto bg-[#f3f3f333] rounded-[20px] overflow-hidden border border-solid border-[#00000033]"
          >
            <CardContent className="p-[15px] h-full flex flex-col">
              <div className="w-full h-[434px] max-[1100px]:h-[350px] max-[1000px]:h-[250px] bg-gray-200 rounded mb-[40px]">
                <img
                  className="w-full h-full object-cover rounded-[10px]"
                  alt="Property"
                  src={property.image}
                />
              </div>

              <div className="w-[140px] h-0.5 bg-gray-300 mb-[50px]">
                <img className="w-full h-full" alt="Line" src="/line-3.svg" />
              </div>

              <div className="flex flex-col gap-[30px] flex-1">
                <div className="flex flex-col gap-3.5">
                  <div className="font-THICCCBOI font-bold text-neutral-800 text-[50px] max-[1100px]:text-[38px] max-[1100px]:leading-[38px] max-[767px]:text-[28px] max-[767px]:leading-[28px] tracking-[0] leading-[50px]">
                    {property.price}
                  </div>

                  <div className="font-THICCCBOI font-semibold text-neutral-800 text-2xl max-[1100px]:text-[20px] max-[767px]:text-[18px]   tracking-[0] leading-[normal]">
                    {property.location}
                  </div>
                </div>

                <div className="w-full h-px bg-gray-300">
                  <img
                    className="w-full h-full object-cover"
                    alt="Line"
                    src="/line-4.svg"
                  />
                </div>

                <div className="flex items-start gap-5 max-[1100px]:flex-wrap">
                  <Badge
                    variant="secondary"
                    className="cursor-pointer transform transition-transform duration-300 hover:scale-90  flex w-full max-w-[180px] max-[1100px]:max-w-[200px] max-[1100px]:max-w-[180px] max-[1100px]:max-w-[150px] max-[1100px]:max-w-[100%]    items-center justify-center gap-2.5  py-2.5 bg-[#f3f3f3] rounded-[5.41px] border border-solid border-[#0000001a] hover:bg-[#f3f3f3]/80"
                  >
                    <img
                      className="w-8 h-8"
                      alt="Square footage"
                      src="/system-uicons-scale.svg"
                    />
                    <span className="font-THICCCBOI font-semibold text-neutral-800 text-xl max-[1100px]:text-[18px] tracking-[0] leading-[100%]">
                      {property.sqft}
                    </span>
                  </Badge>

                  <Badge
                    variant="secondary"
                    className="cursor-pointer transform transition-transform duration-300 hover:scale-90  flex w-full max-w-[180px] max-[1300px]:max-w-[140px] max-[1100px]:max-w-[200px] max-[1100px]:max-w-[150px] max-[1100px]:max-w-[140px] max-[1100px]:max-w-[120px] max-[1100px]:max-w-[100%]     items-center justify-center gap-2.5  py-2.5 bg-[#f3f3f3] rounded-[5.41px] border border-solid border-[#0000001a] hover:bg-[#f3f3f3]"
                  >
                    <img
                      className="w-8 h-8"
                      alt="Bedrooms"
                      src="/fluent-bed-20-regular.svg"
                    />
                    <span className="font-THICCCBOI font-semibold text-neutral-800 text-xl max-[1100px]:text-[18px] tracking-[0] leading-[100%]">
                      {property.bedrooms}
                    </span>
                  </Badge>

                  <Badge
                    variant="secondary"
                    className="cursor-pointer transform transition-transform duration-300 hover:scale-90  flex w-full max-w-[180px] max-[1300px]:max-w-[140px] max-[1100px]:max-w-[100%] items-center justify-center gap-2.5  py-2.5 bg-[#f3f3f3] rounded-[5.41px] border border-solid border-[#0000001a] hover:bg-[#f3f3f3]"
                  >
                    <img
                      className="w-8 h-8"
                      alt="Bathrooms"
                      src="/cil-bathroom.svg"
                    />
                    <span className="font-THICCCBOI font-semibold text-neutral-800 text-xl max-[1100px]:text-[18px] tracking-[0] leading-[100%]">
                      {property.bathrooms}
                    </span>
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
