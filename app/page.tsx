import AuthButton from "../components/layoutcomponents/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Darkmodetoggle from "@/components/layoutcomponents/Darkmodetoggle";
import Navbar from "@/components/layoutcomponents/Navbar";
import ArticleDisplay from "@/components/Articles/ArticleDisplay";
import Link from "next/link";

export default async function Index() {
  const posts = [
    {
      image:
        "https://szitjksnkskfwbckrzfc.supabase.co/storage/v1/object/public/articleimages/Screenshot%202024-03-01%20235433.png?t=2024-03-11T13%3A54%3A17.543Z",
      date: "4th March 2019",
      title: "An experiment",
      author: "Ali Reda",
      type:"domestic",
      key: "1",
    },
    {
      image:
        "https://szitjksnkskfwbckrzfc.supabase.co/storage/v1/object/public/articleimages/OIF.jpg?t=2024-03-11T14%3A48%3A48.335Z",
      date: "5th March 2019",
      title: "Why do we see so muhc injustice in the world",
      type:"foreign",
      author: "Ali Reda",
      key: "2",
    },
    {
      image:
        "https://szitjksnkskfwbckrzfc.supabase.co/storage/v1/object/public/articleimages/download.jpg",
      date: "5th March 2019",
      title: "Are his claims correct? What is he trying to whip up?",
      type:"domestic",
      author: "Barbara Adams",
      key: "3",
    },
    {
      image:
        "https://szitjksnkskfwbckrzfc.supabase.co/storage/v1/object/public/articleimages/yanis.jpg",
      date: "8th March 2019",
      title: "Meet the man pushing against feudal capitalism",
      author: "Jonathan Jenkins",
      type:"foreign",
      key: "4",
    }
    
  ];

  return (
    <div className="gap-14 mt-16 px-3 grid lg:grid-cols-2 xl:max-w-7xl xl:grid-cols-3">
      {posts.map((item) => (
        <Link key={item.key} href={`/factchecks/domestic/${item.key}`}>
          <ArticleDisplay post={item} />
        </Link>
      ))}
    </div>
  );
}
