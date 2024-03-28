'use client'
import { Typography } from "@material-tailwind/react";

export default function Footer ()  {

    return(
        <footer className="w-full mt-7 max-w-7xl xl:max-w-[1400px] border-gray-300 border-t-2 flex justify-between h-20 items-center p-3 mx-12">
        <Typography color="blue-gray" className="font-normal">
          &copy; 2023 Material Tailwind
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Who we are
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              FAQs
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Donate
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </footer>
    )
}