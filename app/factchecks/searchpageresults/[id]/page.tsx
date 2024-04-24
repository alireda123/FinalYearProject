'use client'
import AuthButton from "@/components/layoutcomponents/AuthButton";
import { createClient } from "@/utils/supabase/supabase";
import Darkmodetoggle from "@/components/layoutcomponents/Darkmodetoggle";
import Navbar from "@/components/layoutcomponents/Navbar";
import ArticleDisplay from "@/components/Articles/ArticleDisplay";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Typography, Button } from "@material-tailwind/react";
import image from "next/image";


export default function SearchResultsPage({ params }: { params: { searchQuery: string } }) {
    const supabase = createClient();
    const [article, setArticle] = useState(null)
    const image = "https://szitjksnkskfwbckrzfc.supabase.co/storage/v1/object/public/articleimages/";
    useEffect(() => {
        async function fetchArticle() {
          //  const { data, error } = await supabase.from('articles').select().textSearch('title', `'${params.id}'`);
          const { data, error } = await supabase
          .rpc('search_for_articles', { prefix: params.id })
          .select('*'); 

       
            setArticle(data);
            
        }
        fetchArticle()
      },[])
    return (
        <div className="gap-14 mt-16 px-3 flex flex-col items-center">
        <h2 className="font-extrabold text-2xl md:!text-4xl 2xl:!text-5xl">Search results for: {params.id}</h2>
        {article && article.length > 0 ? article.map((item) => (
          <Link key={item.id} href={`/factchecks/${item.type}/${item.id}`}>
             <Card className="w-full max-w-[48rem] 2xl:max-w-[56rem] flex-row">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                  <img
                    src={image + item.image}
                    alt="card-image"
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardBody>
                  {/* <Typography
                    variant="h6"
                    color="gray"
                    className="mb-4 uppercase"
                  >
                    startups
                  </Typography> */}
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    {item.title}
                  </Typography>
                  <Typography color="gray" className="mb-8 hidden tablet:!block font-normal text-black">
                    <div>{item.summary}</div>
                  </Typography>
                  <a href="#" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
                      Go to Article
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Button>
                  </a>
                </CardBody>
              </Card>
          </Link>
        )) : <h1 className="text-3xl text-center">No results for the search term '{params.id}' exist</h1>}
      </div>
    );
}
  