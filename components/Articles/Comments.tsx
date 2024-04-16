import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Textarea,
} from "@material-tailwind/react";
import { createClient } from "@/utils/supabase/client";
import Modal from "./Modal";
export default function Comments({ comments, user, setComments, deleteComment, setOpenModals, openModals }) {
  const image =
    "https://szitjksnkskfwbckrzfc.supabase.co/storage/v1/object/public/userprofilepictures/";

  const [edit, setEdit] = useState("");
  //grabbed modal from https://www.material-tailwind.com/docs/react/dialog

  const [open, setOpen] = useState(false);
  const handleOpen = (commentId) => {
    setOpenModals({ ...openModals, [commentId]: true });
    };
  
    const handleClose = (commentId) => {
    setOpenModals({ ...openModals, [commentId]: false });
    };

  const supabase = createClient();
  async function updateComment(id) {
    console.log(edit);
    if (edit.length > 0) {
      const { error } = await supabase
        .from("comments")
        .update({ content: edit })
        .eq("comment_id", id);
    }
    const { data } = await supabase
        .from("comments")
        .select()
        .eq("article_id", comments[0].article_id);
      setComments(data);
  }
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
    <section className=" mt-8 flex flex-col justify-start min-h-screen antialiased  min-w-screen">
      <h1 className="text-4xl font-extrabold">Comments</h1>

      <div className="container px-0  sm:px-5">
        {comments &&
          comments.map((item) => {
            return (
              <div
                key={item.comment_id}
                className="flex w-full py-4  mt-3 bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3"
              >
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
                        {convertToStringData(item.created_at)}
                      </span>
                    </div>
                    <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                      {item.content}
                    </div>
                    <div></div>
                  </div>
                  </div>
                  {user &&
                  user[0].id === "04ce407b-236f-45e3-abc1-3105a1cda7a2" ? (
                    <button
                      onClick={() => {
                        deleteComment(item.comment_id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="30"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#FF0000"
                          d="M6 19c0 1.1 .9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm12-11.5V12h-2v-4.5h-1.5V12h-2V7H17.5v4.5h1.5z"
                        />
                      </svg>
                    </button>
                  ) : user && item.commenter_id === user[0].id ? (
                    <div className="flex">
                      <button
                        onClick={() => {
                          deleteComment(item.comment_id);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          style={{fill:"#FA5252"}}
                        >
                          <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
                        </svg>
                      </button>
                      <button className="m-1" onClick={() => handleOpen(item.comment_id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#000000"
                            d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.93 19.07l6.07-6.07-1.41-1.41L4.52 17.66l1.41 1.41z"
                          />
                        </svg>
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
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
