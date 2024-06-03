'use client'
import { definingUnbiased } from "@/utils/ArticleBaseText/BaseText";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { useState } from "react";

export default function AccordionComponent() {
  const [open, setOpen] = useState(1);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  
  return (
    <>
      <Accordion
        open={open === 1}
        className="mb-2 rounded-lg border border-blue-gray-100 px-4"
        placeholder={"notext"}
      >
        <AccordionHeader
          placeholder={"notext"}
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          How do you define 'unbiased' or 'being neutral'?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-sans">
          {definingUnbiased}
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        className="mb-2 rounded-lg border border-blue-gray-100 px-4"
        placeholder={"notext"}
      >
        <AccordionHeader
          placeholder={"notext"}
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Are you objective and unbiased?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-sans">
          No.
          <br />
          This is our honest answer. Its impossible to be truly objective and
          unbiased however we strive to be as objective and unbiased as
          possible. To be objective and unbiased is to be willing to abandon
          one's pre-conceived notions and positions. To be able to do so is
          truly difficult and even those who claim to have abandoned their
          pre-conceived notions and positions are still subconciously
          influcenced by their experiences in life. With regards to this
          platform, we do not intend to feed you a viewpoint, rather we intend
          for you to reach your own conclusion. <br />
          <br />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        className="rounded-lg border border-blue-gray-100 px-4"
        placeholder={"notext"}
      >
        <AccordionHeader
          placeholder={"notext"}
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Should I trust you completely and accept everything you say?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-sans">
          No.
          <br />
          <br />
          You should never submit yourself to any organisation completely. Our
          duty is to highlight, correct and clarify whilst encouraging critical
          thinking, whilst your duty is to critically think and reach your own
          conclusion. It is upon you to reduce your own bias and to consult
          multiple sources including this one and reach an informed conclusion.
        </AccordionBody>
      </Accordion>
    </>
  );
}
