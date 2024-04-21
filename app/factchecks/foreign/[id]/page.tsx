"use client";
import ArticlePage from "@/components/Articles/ArticlePage";
import Comments from "@/components/Articles/Comments";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import CommentBox from "@/components/Articles/Commentbox";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  //got the comments component from https://freefrontend.com/tailwind-comments/
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState(null);
  const [commentbox, setCommentbox] = useState("");
  const [user, setUser] = useState(null);
  // openmodals, handleopen and handleclose from generative AI, google gemini ultra
  const [openModals, setOpenModals] = useState({}); 

 

  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function fetchArticle() {
      const { data, error } = await supabase
        .from("articles")
        .select()
        .eq("id", params.id);
      setArticle(data);
    }
    async function fetchComments() {
      const { data, error } = await supabase
        .from("comments")
        .select()
        .eq("article_id", params.id);
      setComments(data);
      const initialOpenStates = data.reduce((acc, comment) => {
        acc[comment.comment_id] = false;
        return acc;
      }, {});
      setOpenModals(initialOpenStates);
    }
    async function fetchUser() {
      const session = await supabase.auth.getSession();
      const { data, error } = await supabase
        .from("users")
        .select()
        .eq("id", session.data.session?.user.id);
      setUser(data);
    }
    fetchArticle();
    fetchComments();
    fetchUser();
  }, [params.id]);

  async function submitComment(e) {
    e.preventDefault();
    const userdata = await supabase.auth.getUser();
    console.log(userdata)
    if (!userdata.data.user) {
      router.push("/login");
    } else{

    const { error } = await supabase
      .from("comments")
      .insert({
        content: commentbox,
        commenter_id: user[0].id,
        article_id: params.id,
        commenter_name: user[0].username,
        pfp: user[0].pfp
      });
      const { data } = await supabase
        .from("comments")
        .select()
        .eq("article_id", params.id);
      setComments(data);
    }

  }
  async function deleteComment(id:number){
    const { error } = await supabase
    .from('comments')
    .delete()
    .eq('comment_id', id)
    const { data } = await supabase
        .from("comments")
        .select()
        .eq("article_id", params.id);
      setComments(data);
  }


  return (
    <div>
      {article !== null && comments !== null && comments.length === 0 ? (
        <div className="max-w-72 tablet:max-w-[400px] md:!max-w-none">
          <ArticlePage article={article} />
          <CommentBox
            submitComment={submitComment}
            commentbox={commentbox}
            setCommentbox={setCommentbox}
          />
        </div>
      ) : article !== null && comments !== null && comments.length > 0 ? (
        <div className="max-w-72 tablet:max-w-[400px] md:!max-w-none">
          <ArticlePage article={article} />
          <CommentBox
            submitComment={submitComment}
            commentbox={commentbox}
            setCommentbox={setCommentbox}
          />
          <Comments comments={comments} openModals={openModals} setOpenModals={setOpenModals} setComments={setComments} deleteComment={deleteComment} user={user}/>
        </div>
      ) : (
        <div>Page not found</div>
      )}
    </div>
  );
}
