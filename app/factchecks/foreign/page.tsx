import ArticleDisplay from "@/components/Articles/ArticleDisplay";
import Link from "next/link";


export default function Foreign(){
    const posts = [{
        image: "https://szitjksnkskfwbckrzfc.supabase.co/storage/v1/object/public/articleimages/Screenshot%202024-03-01%20235433.png?t=2024-03-11T13%3A54%3A17.543Z",
        date: "4th March 2019",
        title: "An experiment",
        author: "Ali Reda",
        key: "1"
    },
    {
        image: "https://szitjksnkskfwbckrzfc.supabase.co/storage/v1/object/public/articleimages/OIF.jpg?t=2024-03-11T14%3A48%3A48.335Z",
        date: "5th March 2019",
        title: "Why do we see so muhc injustice in the world",
        author: "Ali Reda",
        key: "2"
    }]
       

    return(
        <div className="flex [&>*]:my-6 flex-col ">
        <h1 className="font-extrabold text-5xl">Foreign Fact Checks</h1>
        {posts.map(item => (
            <Link key={item.key} href={`/factchecks/foreign/${item.key}`}><ArticleDisplay post={item}/></Link>
        ))}
        
        </div>
    )
   
    
}