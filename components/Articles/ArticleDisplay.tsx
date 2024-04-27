import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { createClient } from "@/utils/supabase/supabase";
import Link from "next/link";

export default function ArticleDisplay({ post, user }) {
  const image =
    "https://szitjksnkskfwbckrzfc.supabase.co/storage/v1/object/public/articleimages/";
  const supabase = createClient();
  async function deleteArticle(id: number) {
    const { error } = await supabase.from("articles").delete().eq("id", id);
    const { data } = await supabase
      .from("comments")
      .delete()
      .eq("article_id", id);
    console.log(error);
  }

  //function convertostringdata generated using generative AI(copilot)
  function convertToStringData(date: Date) {
    const x = new Date(date);
    const day = x.getDate();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[x.getMonth()];
    const year = x.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;
    return formattedDate;
  }
  return (
    // <Card className="max-w-[24rem] md:max-w-[32rem]">
    //   <Link key={post.id} href={`/factchecks/${post.type}/${post.id}`}> 
    //     <CardHeader
    //       floated={false}
    //       shadow={false}
    //       color="transparent"
    //       className="m-0  h-full w-full"
    //     >
    //       <img src={image + post.image} className="h-full w-full object-cover" width={384} height={252} alt="articleImageOnHomePage" />
    //     </CardHeader>
    //   </Link>
    //   <CardBody>
    //     <div className="flex justify-between">
          
    //         <Typography variant="h4" color="blue-gray">
    //           {post.title}
    //         </Typography>
         
    //       {user &&
    //       user.data.session?.user.id ===
    //         "04ce407b-236f-45e3-abc1-3105a1cda7a2" ? (
    //         <button
    //           onClick={() => {
    //             deleteArticle(post.id);
    //           }}
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="#000000"
    //             height="24px"
    //             width="24px"
    //             version="1.1"
    //             id="Icons"
    //             viewBox="0 0 32 32"
    //           >
    //             <path d="M24,8h-3V7c0-2.8-2.2-5-5-5s-5,2.2-5,5v1H8c-1.7,0-3,1.3-3,3v3c0,0.6,0.4,1,1,1h1v12c0,1.7,1.3,3,3,3h12c1.7,0,3-1.3,3-3V15  h1c0.6,0,1-0.4,1-1v-3C27,9.3,25.7,8,24,8z M13,7c0-1.7,1.3-3,3-3s3,1.3,3,3v1h-6V7z M14,24c0,0.6-0.4,1-1,1s-1-0.4-1-1v-5  c0-0.6,0.4-1,1-1s1,0.4,1,1V24z M20,24c0,0.6-0.4,1-1,1s-1-0.4-1-1v-5c0-0.6,0.4-1,1-1s1,0.4,1,1V24z" />
    //           </svg>
    //         </button>
    //       ) : (
    //         <div></div>
    //       )}

    //       <div></div>
    //     </div>
    //     <Typography variant="lead" color="gray" className="mt-3 font-sans">
    //       {post.summary}
    //     </Typography>
    //   </CardBody>
    //   <CardFooter className="flex items-center justify-between">
    //     <div className="flex items-center -space-x-3">{post.author_name}</div>
    //     <Typography className="font-normal">
    //       {convertToStringData(post.published_at)}
    //     </Typography>
    //   </CardFooter>
    // </Card>
   
        <Card className="max-w-[24rem] overflow-hidden flex flex-col items-stretch ">
          <div>          <Link key={post.id} href={`/factchecks/${post.type}/${post.id}`}> 
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src={image + post.image}
              alt="ui/ux review check"
            />
          
          </CardHeader>
          </Link>
          </div>
 
          
          <CardBody className="flex-1">
            <div className="flex justify-between">
            <Typography variant="h4" color="blue-gray">
              {post.title}
            </Typography>
            {user &&
          user.data.session?.user.id ===
            "04ce407b-236f-45e3-abc1-3105a1cda7a2" ? (
            <button
              onClick={() => {
                deleteArticle(post.id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                height="24px"
                width="24px"
                version="1.1"
                id="Icons"
                viewBox="0 0 32 32"
              >
                <path d="M24,8h-3V7c0-2.8-2.2-5-5-5s-5,2.2-5,5v1H8c-1.7,0-3,1.3-3,3v3c0,0.6,0.4,1,1,1h1v12c0,1.7,1.3,3,3,3h12c1.7,0,3-1.3,3-3V15  h1c0.6,0,1-0.4,1-1v-3C27,9.3,25.7,8,24,8z M13,7c0-1.7,1.3-3,3-3s3,1.3,3,3v1h-6V7z M14,24c0,0.6-0.4,1-1,1s-1-0.4-1-1v-5  c0-0.6,0.4-1,1-1s1,0.4,1,1V24z M20,24c0,0.6-0.4,1-1,1s-1-0.4-1-1v-5c0-0.6,0.4-1,1-1s1,0.4,1,1V24z" />
              </svg>
            </button>
          ) : (
            <div></div>
          )}
           </div>
            <Typography variant="lead" color="gray" className="mt-3 font-normal">
              {post.summary}
            </Typography>
          </CardBody>
          <CardFooter className="flex items-center !justify-between mb-0">
         <div className="flex items-center -space-x-3">{post.author_name}</div>
         <Typography className="font-normal">
           {convertToStringData(post.published_at)}
         </Typography>
       </CardFooter>
       
        </Card>
      );
    }

