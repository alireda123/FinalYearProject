'use client'

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {useState} from "react"
export default function Aboutus() {

  const [open, setOpen] = useState(1);
 
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className=" max-w-3xl mt-12 md:!mt-36 xl:max-w-5xl">
      <div className="flex justify-start flex-col md:flex-row gap-5 animate-fadein duration-1000">
      <div className="flex border-2 mx-3 md:mx-0 border-gray-300 rounded-md  md:border-none shadow-2xl shadow-blue-600 items-center flex-col p-3 mb-6">
        <h1 className="text-5xl font-medium mb-4 ">Who we are</h1>
        <p className="font-sans text-center leading-7 ">
         IllumiFact is an organisation created in order to highlight, correct and 
         hold to account those who propagate misinformation. Having had much experience 
         on different social media platforms like reddit or X, the founder of this organisation realised the grave extent 
         to which false beliefs were spread on such platforms. We are merely a cog in the machine comprised
         of people who recognise incorrect statements and beliefs and attempt to correct them. People already exist
         who fact-check on social media, however their fact-checking is informal and not based on a robust methodology. We are 
         a formal and authoritative alternative to informal fact-checking on social media and formal fact-checking by mainstream media
         companies that often falls short of what British society requires. 
         This platform is necessary due to the ever increasing amount of misinformation that exists which
         affects the worldviews of the British population; the type of worldview that the British population
         holds is the difference between a prosperous society governed by fruitful domestic policies and a failing
         and dying society governed by barren domestic policies. Furthermore, the lack of information or abundance 
         of misinformation can lead to complacenly with regards to crimes or injustices committed by one's own government on 
         countries abroad.
        </p>
      </div>
  <div className="flex border-2 mx-3 md:mx-0 border-gray-300 rounded-md  md:border-none shadow-2xl shadow-blue-600  flex-col p-3 mb-6 items-center ">
        <h1 className="text-5xl font-medium mb-4">Our mission</h1>
        <p className="font-sans text-center leading-7">
          Our mission is to correct misinformation and explain its impact and to encourage 
          critical thinking and media literacy. The most important objective is to encourage critical 
          thinking. Critical thinking not only allows one to identify misinformation, but allows one to 
          evaluate information comprehensively and form informed opinions. Critical thinkers are not dogmatic, 
          nor are they tribalistic in terms of their identification with their beliefs. A society of critical thinkers
          is a prosperous society. We assume you already have seen the tribalistic and dogmatic nature of discussions 
          on social media on platforms such as X or Reddit. Discussions are shallow and full of insults and accusations, rather than 
          having depth and a mutual respect for each other's beliefs. Our mission is also to encourage media literacy, since a media 
          literate populace will be able to recognise biases in different media outlets, combat misinformation, rely on reliable sources
          and make informed decisions.   
        </p>
        </div>
        </div>
        <div id="FAQs" >
        <h1 className="text-5xl text-center font-extrabold mt-24 mb-4">FAQs</h1>
      <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          How do you define 'unbiased' or 'being neutral'?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-sans">
          Our take on what is classified as 'unbiased' or 'being neutral' is different to what mainstream media companies or fact-checking organisations may espouse.
          We shall exemplify this through the following example. Two parties are in a conflict. One party has objectively been shown to produce misinformation repeatedly,
          to the extent that if that party were a person they would be considered a chronic liar, whilst the other party has had its evidence corroborated by many sources 
          such as UN and humans rights organisations. The idea of neutrality espoused by mainstream media companies results in them attaching  equal significance to both parties,
          and even providing many oppurtunities for the party that espouses misinformation to provide misinformation through interviews. In our view, this is pseudo-neutrality, which on the surface
          appears to give the illusion of fairness and honesty, whereas it is actually grounded on either naivety or conformation to a worldview or agenda the mainstream media organisation possesses.<br/><br/>
          This pseudo-neutrality is what, in our view, perpetuates conflicts around the world, since conflicts are perpetuated through the decisions of politicians; the decisions of politicians are based on information and 
          based on the outlook of their society. If that society is fed misinformation through the guise of neutrality(or even bias), and that society lacks the ability to critically think, many members of that society will end up
          supporting conflicts or domestic policies that do not have their best interests at heart.
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
          No.<br/>
          This is our honest answer. Its impossible to be truly objective and unbiased however we strive to be as objective and unbiased as possible.
          To be objective and unbiased is to be willing to abandon one's pre-conceived notions and positions. To be able to do so is truly difficult and even
          those who claim to have abandoned their pre-conceived notions and positions are still subconciously influcenced by their experiences in life. With regards to this platform, 
          we do not intend to feed you a viewpoint, rather we intend for you to reach your own conclusion.  <br/><br/> 
          

        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Should I trust you completely and accept everything you say?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-sans">
          No.<br/><br/>
          You should never submit yourself to any organisation completely. Our duty is to highlight, correct and clarify whilst encouraging critical thinking, whilst your duty is to 
          critically think and reach your own conclusion. It is upon you to reduce your own bias and to consult multiple sources including this one and reach an informed conclusion. 

        </AccordionBody>
      </Accordion>
      </div>
      </div>
  
  );
}
