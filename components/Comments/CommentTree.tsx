"use client";
import { useState, useEffect } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import Modal from "../Articles/ArticlePage/Modal";
import { convertToStringDateWithTime } from "@/utils/usefulFunctions/convertToStringData";
import ReplyBox from "../Articles/ArticlePage/Replybox";
import { createClient } from "@/utils/supabase/supabase";
interface CommentWithDepth extends Comment {
  depth: number;
}

export default function CommentTree({
  comments,
  role,
  data,
  deleteComment,
  edit,
  updateComment,
  setEdit,
  open,
  openModals,
  handleClose,
  handleOpen,
  articleid,
  addReplyToTree,
  handleAddReply
}: {
  comments: any;
}) {
  const image =
    "https://szitjksnkskfwbckrzfc.supabase.co/storage/v1/object/public/userprofilepictures/";
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyContent, setReplyContent] = useState("");
  const [showReplyBox, setShowReplyBox] = useState({});
  const supabase = createClient();
  function replyToComment(commentId) {
    setReplyingTo(commentId);
    setShowReplyBox((prev) => ({ ...prev, [commentId]: true }));
  }

  async function submitReply(parentCommentId, articleid) {
    const { data: newcom, error } = await supabase.from("comments").insert({
      content: replyContent,
      commenter_id: data[0].id,
      article_id: articleid,
      commenter_name: data[0].username,
      pfp: data[0].pfp,
      parent_id: parentCommentId,
    }).select("*")
    console.log(newcom)
    if (!error) {
      handleAddReply(parentCommentId, newcom[0])
      
    }
    console.log(error);
    setReplyingTo(null);
    setReplyContent("");
    setShowReplyBox((prev) => ({ ...prev, [parentCommentId]: false }));
  }




  return (
    <div className="">
      {comments && comments.map((item) => (
        <div key={item.comment_id}>
          <div
            className="flex py-4 mt-3 bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm"
            style={{ marginLeft: `${item.depth * 60}px` }} // Indentation based on depth
          >
            <div className="flex w-full justify-between ">
              {/* ... Avatar and Comment Details (same as before) ... */}
              <div className="flex w-full justify-between ">
                <div className="flex">
                  <img
                    className="w-12 h-12 border-2 border-gray-300 rounded-full"
                    alt="Anonymous's avatar"
                    src={image + item.pfp}
                  />
                  <div className="flex-col mt-1">
                    <div className="flex items-center flex-1 px-4 font-bold leading-tight">
                      {item.commenter_name}
                      <span className="ml-2 text-xs font-normal text-gray-500">
                        {convertToStringDateWithTime(item.created_at)}
                      </span>
                      {item.is_edited ? (<span className="ml-2 font-normal text-xs text-gray-500">(edited)</span>) : <></>}
                    </div>
                    <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                      {item.content}
                    </div>
                    <div className="flex px-2 ml-2 underline">
                      <button
                        onClick={() => {
                          replyToComment(item.comment_id);
                        }}
                        className="justify-end items-end"
                      >
                        reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                {data &&
                (role === "admin" ||
                  role === "moderator" ||
                  item.commenter_id === data[0].id) ? (
                  <>
                    <button onClick={() => deleteComment(item.comment_id)}>
                      <MdDelete size={24} color="#FA5252" />
                    </button>
                    {item.commenter_id === data[0].id && (
                      <>
                        <button
                          className="m-1"
                          onClick={() => handleOpen(item.comment_id)}
                        >
                          <MdEdit size={24} />
                        </button>
                        <Modal
                          edit={edit}
                          updateComment={updateComment}
                          setEdit={setEdit}
                          item={item}
                          open={open}
                          handleClose={() => handleClose(item.comment_id)}
                          openModals={openModals}
                        />
                      </>
                    )}
                  </>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
          <div style={{ marginLeft: `${item.depth * 60}px` }}>
            <ReplyBox
              commentId={item.comment_id}
              setReplyContent={setReplyContent}
              replyContent={replyContent}
              setShowReplyBox={setShowReplyBox}
              setReplyingTo={setReplyingTo}
              submitReply={submitReply}
              showReplyBox={showReplyBox}
              articleid={articleid}
            />
          </div>
          {item.replies && (
            <CommentTree
              comments={item.replies}
              role={role}
              data={data}
              edit={edit}
              updateComment={updateComment}
              deleteComment={deleteComment}
              setEdit={setEdit}
              item={item}
              open={open}
              handleOpen={handleOpen}
              handleClose={handleClose}
              openModals={openModals}
              articleid={articleid}
              addReplyToTree={addReplyToTree}
              handleAddReply={handleAddReply}
            />
          )}
        </div>
      ))}
    </div>
  );
}
