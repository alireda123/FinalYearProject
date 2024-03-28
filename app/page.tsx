'use client'
import AuthButton from "../components/layoutcomponents/AuthButton";
import { createClient } from "@/utils/supabase/client";
import Darkmodetoggle from "@/components/layoutcomponents/Darkmodetoggle";
import Navbar from "@/components/layoutcomponents/Navbar";
import ArticleDisplay from "@/components/Articles/ArticleDisplay";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Index() {
  
  const [article, setArticle] = useState(null);
    const supabase = createClient();
    useEffect(() => {
      async function fetchArticle() {
          const { data, error } = await supabase.from('articles').select('*');
          setArticle(data);
          console.log(data);
      }
      async function fetchBuckers(){
        const { data, error } = await supabase
  .storage
  .getBucket('articlesimages');
  data && console.log(data)
      }
      fetchArticle()
      fetchBuckers()
    },[])

  return (
    <div className="gap-14 mt-16 px-3 grid lg:grid-cols-2 xl:grid-cols-3 ">
      {article && article.map((item) => (
        <Link key={item.id} href={`/factchecks/${item.type}/${item.id}`}>
          <ArticleDisplay post={item} />
        </Link>
      ))}
    </div>
  );
}
