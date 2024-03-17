import Image from 'next/image'

export default function ArticleDisplay ({post})  {
    const type = post.type
    return(
        <div className={`flex rounded-xl flex-col border border-b-2 min-h-96 ${type === "foreign" ? 'shadow-[0_0_1px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]' : 'shadow-[0_0_1px_#ff0000,inset_0_0_2px_#ff0000,0_0_5px_#c00,0_0_15px_#c00,0_0_30px_#c00]'}`}>
            <Image className='w-full relative  rounded-t-xl' src={post.image} alt='' width={200} height={250}></Image>
            <div className='p-4'>
            <p>{post.date}</p>
            <h3 className='font-bold '>{post.title}</h3>
            <p>Written by {post.author}</p>
            </div>
        </div>
    )
}