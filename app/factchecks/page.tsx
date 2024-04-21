import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';

export default function Notes() {
// https://cssf1.com/snippet/create-a-neon-effect-with-tailwindcss for neon effect
  return (
      <div className='max-w-48 tablet:max-w-72 md:[&>*]:m-9 md:min-w-[500px] w-full md:flex flex-col md:flex-row  justify-center  '>
       <Link href="/factchecks/domestic"><div className='p-12 mb-9 md:mb-0 tablet:p-24 md:!p-36 2xl:!p-48 cursor-pointer flex justify-center rounded-lg shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] hover:scale-105 duration-500'><h1 className='font-extrabold text-3xl md:!text-5xl'>Domestic</h1></div></Link>
        <Link href="/factchecks/foreign"><div className='p-12 tablet:p-24 md:!p-36 2xl:!p-48 cursor-pointer flex justify-center rounded-lg shadow-[0_0_2px_#ff0000,inset_0_0_2px_#ff0000,0_0_5px_#c00,0_0_15px_#c00,0_0_30px_#c00] hover:scale-105 duration-500'><h1 className='font-extrabold text-3xl md:!text-5xl'>Foreign</h1></div></Link>
      </div>
    )
}