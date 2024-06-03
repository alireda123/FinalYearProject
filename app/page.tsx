export const runtime = 'edge' // 'nodejs' (default) | 'edge'
import ArticleDisplay from "@/components/Articles/ArticlePage/ArticleDisplay";
import { articles, sessionType } from "@/Types/allTypes";
import { HomepageListing } from "@/components/Articles/ArticlesListingPage/HomepageListing";
import { PostgrestSingleResponse, User, UserResponse} from "@supabase/supabase-js";
import { image1, image2, image3, explanation1, explanation2, explanation3 } from "@/utils/ArticleBaseText/BaseText";
import { createClient } from "@/utils/supabase/server";
import { jwtDecode } from "jwt-decode";
export default async function Home() {
  //const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
 const supabase = createClient();
 //const { data: {session}, error: sessionError } = await supabase.auth.getSession();

 // Fetch data from your Edge Function
//  const response = await fetch('http://127.0.0.1:54321/functions/v1/getArticles', {
//      headers: {
//          'Authorization': `Bearer ${session?.access_token}` // Pass JWT if available
//      }
//  });
//  const { data: articles, error: fetchError } = await response.json();
//  console.log(articles, fetchError)
  const {data}: PostgrestSingleResponse<articles[]|null> = await supabase.from("articles").select("*");
  // const {data} = await supabase.auth.getSession();
  // console.log(data.session?.access_token)

//  const {data, error} = await supabase.functions.invoke('getArticles', {
//     method: "GET"
//  })
//   // redirect('/signup/adduserdetails')
 
  return (
    <div className="landingpageanimation flex justify-center max-w-80 sm:max-w-none flex-col items-center [&>*]:my-14 ">
     
      <div className=" text-center  text-wrap  sm:!max-w-none" >
      <h1 className="  text-4xl md:!text-7xl  mb-9 font-bold">
        Welcome to <span className="gradient-text">IllumiFact</span>
      </h1>
      <h3 className="text-shadow text-2xl md:!text-4xl text-center">We shed light on the political misinformation<br/> in society that threatens our democracy<br/> and the lives of those at home and abroad.</h3>
      </div>
      <div className=" hidden  xl:!flex flex-col   [&>*]:my-3 first:!my-0 xl:!flex-row [&>*]:mx-3 " >
        <HomepageListing name='Highlight' explanation={explanation1} image={image1}/>
        <div className="mb-14">
          <HomepageListing  name='Correct' explanation={explanation2} image={image2}/>
        </div>
        <HomepageListing name='Hold to account' explanation={explanation3} image={image3}/>
      </div>
      
      <div className=" gap-14 px-3 grid sm:grid-cols-1 lg:grid-cols-2 xl:!grid-cols-3 " >
      {data && data.length>0 && data.map((item: articles) => (
          <ArticleDisplay   key={item.id} post={item}/>
      ))}
      </div>
    </div>
  );
}
