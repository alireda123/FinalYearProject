
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Darkmodetoggle from "@/components/Darkmodetoggle";
import Navbar from "@/components/Navbar";
import ArticleDisplay from "@/components/ArticleDisplay";
export default async function Index() {

  return (
      

      <div className="gap-14 mt-16  px-3 grid lg:grid-cols-2 xl:grid-cols-3">
 
       
          <ArticleDisplay/>
          <ArticleDisplay/>
          <ArticleDisplay/>
          <ArticleDisplay/>
          <ArticleDisplay/>
          <ArticleDisplay/>
          <ArticleDisplay/>
          <ArticleDisplay/>
          <ArticleDisplay/>
          <ArticleDisplay/>
          <ArticleDisplay/>
          <ArticleDisplay/>
          <ArticleDisplay/>
          <ArticleDisplay/>
          <ArticleDisplay/>
          <ArticleDisplay/>
          <ArticleDisplay/>
          <ArticleDisplay/>
          <ArticleDisplay/>
          <ArticleDisplay/>

     
      </div>

      
  );
}
