import Image from 'next/image'

export default function ArticleDisplay ()  {
    const x = "/Screenshot 2024-03-01 235433.png"
    return(
        <div className='flex flex-col max-w-[800px] border border-b-2'>
            <Image className='w-full' src={x} alt='' width={200} height={200}></Image>
            <div className='p-4'>
            <p>8th March 2024</p>
            <h3 className='font-bold '>Random Title for the sake of experimentation. I write a lil more jsut for fun</h3>
            <p>Written by Ali Reda</p>
            </div>
        </div>
    )
}