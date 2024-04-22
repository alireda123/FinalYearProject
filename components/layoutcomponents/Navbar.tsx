'use client'
import Link from "next/link";
import AuthButton from "./AuthButton";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {useEffect, useState} from "react"
import { createClient } from "@/utils/supabase/client";
import { useRouter, useSearchParams } from "next/navigation";
import { DocSearch } from "@docsearch/react";
import { Select, Option } from "@material-tailwind/react";
 //search grabbed from https://tailwindcomponents.com/component/search-input-full-rounded
 import {
  Dropdown,
  initTWE,
} from "tw-elements";



    
  

export default function Navbar() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const router = useRouter()
  // Adapted Menu section from https://tailwindui.com/components/application-ui/elements/dropdowns
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const supabase = createClient();
  useEffect(() => {
    fetchUser()
    initTWE({ Dropdown });
  })
  async function fetchUser() {
    const session = await supabase.auth.getSession();
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("id", session.data.session?.user.id);
    setUser(data);
  }
  async function signOut(){
    await supabase.auth.signOut()
    router.push("/login")
  }
  async function searchForItem(){
   router.push(`/factchecks/searchpageresults/${searchQuery}`);
  }
  
    

  

 
  return (
    <nav className="w-full flex justify-center border-b lg:w-full sm:w-96 border-b-foreground/10 h-16">
      <div className="w-full max-w-6xl xl:!max-w-[1400px]  flex justify-between items-center md:flex-row  md:justify-between md:items-center  p-3 sm:mx-12  ">
        <Link href="/" className="text-2xl font-extrabold">
          Home
        </Link>
        <div className="w-full font-sans hidden md:flex justify-center items-center p-3 md:!text-lg [&>*]:mx-3">
          <Link href="/factchecks">Fact Checks</Link>
          <Link href="/submitclaim">Submit a claim</Link>
          <Link href="/aboutus">Who We Are</Link>
          {user && user[0].id === "04ce407b-236f-45e3-abc1-3105a1cda7a2" ? <div className="flex [&>*]:mx-3"><Link href="/protected/viewmisinformation">MC</Link><Link href="/protected/admin">Write Article</Link></div> : <></>}
          <Link href="https://patreon.com/MisinformationPlatform?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link">Donate</Link>
        </div>
        <div className=" md:hidden">
        <div className="relative" data-twe-dropdown-ref="">
    <a
      className="flex cursor-pointer items-center px-2 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
      
      type="button"
      id="dropdownMenuButton2"
      data-twe-dropdown-toggle-ref=""
      aria-expanded="false"
      
    >
      <span className="[&>svg]:h-5 [&>svg]:w-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      </span>
     
      <span className="[&>svg]:w-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </a>
    <ul
      className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
      aria-labelledby="dropdownMenuButton1"
      data-twe-dropdown-menu-ref=""
    >
      <li>
        <a
          className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
          href="/factchecks"
          data-twe-dropdown-item-ref=""
        >
          Fact Checks
        </a>
      </li>
      <li>
        <a
          className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
          href="/submitclaim"
          data-twe-dropdown-item-ref=""
        >
          Submit Claim
        </a>
      </li>
      <li>
        <a
          className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
          href="/aboutus"
          data-twe-dropdown-item-ref=""
        >
          Who we are
        </a>
      </li>
      <li>
        <a
          className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
          href="https://www.patreon.com/MisinformationPlatform?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link"
          data-twe-dropdown-item-ref=""
        >
          Donate
        </a>
      </li>
      {user && user[0].id === "04ce407b-236f-45e3-abc1-3105a1cda7a2" ?
      (<div>
      <li>
        <a
          className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
          href="/protected/viewmisinformation"
          data-twe-dropdown-item-ref=""
        >
          Misinformation Claim
        </a>
      </li>
      <li>
        <a
          className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
          href="/protected/admin"
          data-twe-dropdown-item-ref=""
        >
          Write Article
        </a>
      </li>
      
      </div> ): <div></div>}
    </ul>
  </div>
        </div>
       
          <div className="flex items-center">
          
          <div className="relative text-gray-600">
<div className="">
  <input
    type="search"
    name="search"
    placeholder="Search"
    onChange={(e) => {setSearchQuery(e.target.value)}}
    className="bg-white max-w-24 tablet:min-w-56 md:min-w-72 h-10  md:px-5 md:pr-10 rounded-full text-sm focus:outline"
  />
  <button onClick={(e) => {searchForItem(e.target.value)}} className="absolute right-0 top-0 mt-3 mr-4">
    <svg
      className="h-4 w-4 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 56.966 56.966"
      xmlSpace="preserve"
      width="24px"
      height="24px"
    >
      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
    </svg>
  </button>
</div>
</div>
    <div>
        {user ? (
        <div>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full font-sans justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                {user[0].username}
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
               
                <div className="py-1">
                  
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/protected/settings"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      
                <button onClick={signOut}>
                      <div
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Logout
                        
                      </div>
                      </button>
                    )}
                  
                  </Menu.Item>
              
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        ) : (<div className=""><Link href="/login"><button className="px-3 py-1 text-white rounded-xl bg-gradient-to-br from-blue-700 to-purple-700">Login</button></Link></div>)}
      </div>
      </div>
      </div>
    </nav>
  );
}
