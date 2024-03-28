'use client'

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {useState} from "react"
export default function Aboutus() {

  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className=" max-w-3xl mt-48 xl:max-w-5xl">
      <div className="flex justify-start gap-5 animate-fadein duration-1000">
      <div className="flex shadow-2xl shadow-blue-600 items-center flex-col p-3 mb-6">
        <h1 className="text-5xl font-medium mb-4 ">Who we are</h1>
        <p className="font-sans text-center leading-7 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor
          rhoncus dolor purus non enim praesent. Vitae et leo duis ut. Euismod
          lacinia at quis risus. Dui id ornare arcu odio ut sem nulla pharetra
          diam. Vulputate enim nulla aliquet porttitor lacus luctus accumsan
          tortor posuere. Urna nec tincidunt praesent semper feugiat nibh sed
          pulvinar. Lacinia quis vel eros donec ac odio tempor. At quis risus
          sed vulputate odio ut enim blandit. Vitae auctor eu augue ut lectus.
          Praesent elementum facilisis leo vel fringilla est ullamcorper eget.
          Magna etiam tempor orci eu lobortis elementum nibh tellus. At auctor
          urna nunc id cursus metus. Quisque sagittis purus sit amet volutpat
          consequat mauris nunc. Elementum curabitur vitae nunc sed velit
          dignissim sodales ut eu. Sed turpis tincidunt id aliquet risus feugiat
          in ante. Sociis natoque penatibus et magnis dis parturient montes
          nascetur. Phasellus vestibulum lorem sed risus. Bibendum est ultricies
          integer quis auctor elit. Enim lobortis scelerisque fermentum dui
          faucibus in ornare quam viverra. A erat nam at lectus urna duis
          convallis convallis tellus. 
        </p>
      </div>
  <div className="flex  shadow-2xl shadow-blue-600 shadow-black flex-col p-3 mb-6 items-center ">
        <h1 className="text-5xl font-medium mb-4">Our mission</h1>
        <p className="font-sans text-center leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor
          rhoncus dolor purus non enim praesent. Vitae et leo duis ut. Euismod
          lacinia at quis risus. Dui id ornare arcu odio ut sem nulla pharetra
          diam. Vulputate enim nulla aliquet porttitor lacus luctus accumsan
          tortor posuere. Urna nec tincidunt praesent semper feugiat nibh sed
          pulvinar. Lacinia quis vel eros donec ac odio tempor. At quis risus
          sed vulputate odio ut enim blandit. Vitae auctor eu augue ut lectus.
          Praesent elementum facilisis leo vel fringilla est ullamcorper eget.
          Magna etiam tempor orci eu lobortis elementum nibh tellus. At auctor
          urna nunc id cursus metus. Quisque sagittis purus sit amet volutpat
          consequat mauris nunc. Elementum curabitur vitae nunc sed velit
          dignissim sodales ut eu. Sed turpis tincidunt id aliquet risus feugiat
          in ante. Sociis natoque penatibus et magnis dis parturient montes
          nascetur. Phasellus vestibulum lorem sed risus. Bibendum est ultricies
          integer quis auctor elit. Enim lobortis scelerisque fermentum dui
          faucibus in ornare quam viverra. A erat nam at lectus urna duis
          convallis convallis tellus. 
        </p>
        </div>
        </div>
        <div>
        <h1 className="text-5xl text-center font-extrabold mt-24 mb-4">FAQs</h1>
      <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          How is this funded?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-sans">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Are you objective and unbiased?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-sans">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          How are you transparent with the readers
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-sans">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      </div>
      </div>
  
  );
}
