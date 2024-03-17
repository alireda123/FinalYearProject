import ArticlePage from "@/components/Articles/ArticlePage";
import Comments from "@/components/Articles/Comments";

export default function Page({ params }: { params: { id: string } }) {
    //got the comments component from https://freefrontend.com/tailwind-comments/
    return (
        <div>
        <ArticlePage/>
        <Comments />
        </div>
    )
  }