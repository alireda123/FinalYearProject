import Image from 'next/image'
import Link from 'next/link'
export default function Donate(){


    return(
        <div className=" max-w-3xl mt-24 xl:max-w-4xl">
      <div className="flex flex-col justify-center items-center animate-fadein duration-1000 mb-72">
       <div className=" flex flex-col items-center   mb-16 ">
        <h1 className="text-7xl  font-extrabold mr-8 mb-4">Donate</h1>
        <h2 className="text-5xl font-extrabold ">You fund our operations.</h2>
        </div>
        <Image width={500} height={500} className='mb-16' alt="image of destroyed Gaza" src="https://szitjksnkskfwbckrzfc.supabase.co/storage/v1/object/public/articleimages/th.jpg?t=2024-03-14T16%3A15%3A32.850Z"/>
        <p className="mb-16 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim. Rhoncus dolor purus non enim praesent. Sit amet luctus venenatis lectus magna fringilla. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Tortor posuere ac ut consequat semper viverra nam libero justo.</p>
       
        <Link href="https://patreon.com/MisinformationPlatform?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link"><button className=""><p className="rounded-md p-2 px-3 text-4xl bg-red-700 text-white shadow-2xl shadow-blue-700">Donate</p></button></Link>
        </div>
       
        </div>
        
    )
}