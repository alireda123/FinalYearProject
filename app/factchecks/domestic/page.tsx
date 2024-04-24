"use client";
import ArticleDisplay from "@/components/Articles/ArticleDisplay";
import { createClient } from "@/utils/supabase/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Domestic() {
  const image =
    "https://szitjksnkskfwbckrzfc.supabase.co/storage/v1/object/public/articleimages/";
  const [article, setArticle] = useState(null);
  const supabase = createClient();
  useEffect(() => {
    async function fetchArticle() {
      const { data, error } = await supabase
        .from("articles")
        .select()
        .eq("type", "domestic");
      setArticle(data);
    }
    async function fetchBuckers() {
      const { data, error } = await supabase.storage.getBucket(
        "articlesimages"
      );
      data && console.log(data);
    }
    fetchArticle();
    fetchBuckers();
  }, []);

  return (
    <div className="flex [&>*]:my-6 flex-col mt-12 [&>*]:mx-3 md:mt-24 ">
      <h1 className="domesticpagetitle font-extrabold text-2xl  md:!text-4xl 2xl:!text-5xl ">Domestic Fact Checks</h1>
      {article &&
        article.map((item) => {
    //    document.getElementById(item.id).innerHTML = article[0].summary;
          return (
            <Link key={item.key} href={`/factchecks/${item.type}/${item.id}`}>
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
                  
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    {item.title}
                  </Typography>
                  <Typography color="gray" className="mb-8 font-normal text-black">
               <p className="line-clamp-2 tablet:line-clamp-4 md:!line-clamp-none">{item.summary}</p>
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
          );
        })}
    </div>
  );
}
