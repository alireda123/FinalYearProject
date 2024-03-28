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

export default function ArticleDisplay({ post }) {
  const image =
    "https://szitjksnkskfwbckrzfc.supabase.co/storage/v1/object/public/articleimages/";
  //function convertostringdata generated using generative AI(copilot)
  function convertToStringData(date: Date) {
    const x = new Date(date)
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
    <Card className="max-w-[24rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img src={image + post.image} alt="ui/ux review check" />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {post.title}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-sans">
          {post.summary}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center -space-x-3">{post.author_name}</div>
        <Typography className="font-normal">
          {convertToStringData(post.published_at)}
        </Typography>
      </CardFooter>
    </Card>
  );
}
