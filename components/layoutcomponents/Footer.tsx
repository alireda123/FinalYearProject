'use client'
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
//grabbed footer from material tailwind
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
              href="/aboutus"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Who we are
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <Link   href="/aboutus#FAQs">FAQs</Link>
              
            </Typography>
          </li>
          <li>
            <Typography
            
              as="a"
              href="https://patreon.com/MisinformationPlatform?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Donate
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/submitclaim"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Submit A Claim
            </Typography>
          </li>
        </ul>
      </footer>
    )
}