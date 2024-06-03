import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from "@material-tailwind/react"
import type { AccordionProps, AccordionBodyProps, AccordionStylesType, AccordionHeaderProps } from "@material-tailwind/react";
import {useState} from "react"
import { whoWeAre, ourMission, definingUnbiased } from "@/utils/ArticleBaseText/BaseText";
import AccordionComponent from "@/components/Accordion/Accordion";
export default function Aboutus() {
  
  return (
    <div className=" max-w-3xl mt-12 md:!mt-36 xl:max-w-5xl">
      <div className="flex justify-start flex-col md:flex-row gap-5 animate-fadein duration-1000">
      <div className="flex border-2 mx-3 md:mx-0 border-gray-300 rounded-md  md:border-none shadow-2xl shadow-blue-600 items-center flex-col p-3 mb-6">
        <h1 className="text-5xl font-medium mb-4 ">Who we are</h1>
        <p className="font-sans text-center leading-7 ">
         {whoWeAre}
        </p>
      </div>
  <div className="flex border-2 mx-3 md:mx-0 border-gray-300 rounded-md  md:border-none shadow-2xl shadow-blue-600  flex-col p-3 mb-6 items-center ">
        <h1 className="text-5xl font-medium mb-4">Our mission</h1>
        <p className="font-sans text-center leading-7">
         {ourMission}   
        </p>
        </div>
        </div>
        <div id="FAQs" >
        <h1 className="text-5xl text-center font-extrabold mt-24 mb-4">FAQs</h1>
        <AccordionComponent />
      </div>
      </div>
  
  );
}
