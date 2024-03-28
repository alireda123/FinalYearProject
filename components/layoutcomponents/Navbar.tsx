'use client'
import Link from "next/link";
import AuthButton from "./AuthButton";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {useEffect, useState} from "react"
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { DocSearch } from "@docsearch/react";
import { Input } from "@material-tailwind/react";

const APP_ID = "your-app-id";
const INDEX_NAME = "your-index-name";
const API_KEY = "your-algolia-api-key";
 //algolia search grabbed from https://www.material-tailwind.com/docs/react/plugins/algolia-search

export default function Navbar() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const router = useRouter()
  // Adapted Menu section from https://tailwindui.com/components/application-ui/elements/dropdowns
  const [user, setUser] = useState(null);
  
  const supabase = createClient();
  useEffect(() => {
    fetchUser()
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
    router.refresh()
  }

 
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-7xl xl:max-w-[1400px]  flex justify-between items-center p-3 mx-12">
        <Link href="/" className="text-2xl font-extrabold">
          Home
        </Link>
        <div className="w-full font-sans flex justify-center items-center p-3 text-lg [&>*]:mx-3">
          <Link href="/factchecks">Fact Checks</Link>
          <Link href="/submitclaim">Submit a claim</Link>
          <Link href="/aboutus">Who We Are</Link>
          <Link href="https://patreon.com/MisinformationPlatform?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link">Donate</Link>
        </div>
        <div className="group mr-4 relative">
      <Input
        type="email"
        placeholder="Search"
        className="focus:!border-t-gray-900 group-hover:border-2 group-hover:!border-gray-900"
        labelProps={{
          className: "hidden",
        }}
        readOnly
      />
      <div className="absolute top-[calc(50%-1px)] right-2.5 -translate-y-2/4">
        <kbd className="rounded border border-blue-gray-100 bg-white px-1 pt-px pb-0 text-xs font-medium text-gray-900 shadow shadow-black/5">
          <span className="mr-0.5 inline-block translate-y-[1.5px] text-base">
            ⌘
          </span>
          K
        </kbd>
      </div>
      <div className="absolute inset-0 w-full opacity-0">
        <DocSearch indexName={INDEX_NAME} apiKey={API_KEY} appId={APP_ID} />
      </div>
    </div>
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
                        href="#"
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
    </nav>
  );
}
