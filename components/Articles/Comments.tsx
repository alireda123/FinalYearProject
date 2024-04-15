import {useState} from "react"
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Textarea
} from "@material-tailwind/react";
import { createClient } from "@/utils/supabase/client";
export default function Comments({ comments, user, deleteComment }) {
  const image =
    "https://szitjksnkskfwbckrzfc.supabase.co/storage/v1/object/public/userprofilepictures/";
 
 const [edit, setEdit] = useState("");
 //grabbed modal from https://www.material-tailwind.com/docs/react/dialog
 const [open, setOpen] = useState(false);
 const handleOpen = () => setOpen(!open); 
 const supabase = createClient()
 async function updateComment(id){
  console.log(edit)
  if(edit.length > 0){
  const { error } = await supabase
  .from('comments')
  .update({ content: edit })
  .eq('comment_id', id)
  }  
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
        {/* <div className="flex-col w-full py-4 mx-auto bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
          <div className="flex flex-row">
            <img
              className="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
              alt="Noob master's avatar"
              src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
            />
            <div className="flex-col mt-1">
              <div className="flex items-center flex-1 px-4 font-bold leading-tight">
                {comments[0].commenter_name}
                <span className="ml-2 text-xs font-normal text-gray-500">
                  2 weeks ago
                </span>
              </div>
              <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                Wow!!! how you did you create this?
              </div>
              <button className="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                <svg
                  className="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                  viewBox="0 0 95 78"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                    fillRule="nonzero"
                  />
                </svg>
              </button>
              <button className="inline-flex items-center px-1 -ml-1 flex-column">
                <svg
                  className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <hr className="my-2 ml-16 border-gray-200" />
          <div className="flex flex-row pt-1 md-10 md:ml-16">
            <img
              className="w-12 h-12 border-2 border-gray-300 rounded-full"
              alt="Emily's avatar"
              src="https://images.unsplash.com/photo-1581624657276-5807462d0a3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
            />
            <div className="flex-col mt-1">
              <div className="flex items-center flex-1 px-4 font-bold leading-tight">
                Emily
                <span className="ml-2 text-xs font-normal text-gray-500">
                  5 days ago
                </span>
              </div>
              <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                I created it using TailwindCSS
              </div>
              <button className="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                <svg
                  className="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                  viewBox="0 0 95 78"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                    fillRule="nonzero"
                  />
                </svg>
              </button>
              <button className="inline-flex items-center px-1 -ml-1 flex-column">
                <svg
                  className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
              </button>
            </div>
          </div>
        </div> */}
        <div></div>
        {comments &&
          comments.map((item) => {
            return (
              
              <div
                key={item.comment_id}
                className="flex-col w-full py-4  mt-3 bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3"
              >
                
                <div className="flex w-full justify-between flex-row">
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
                  {user && user[0].id ===
                  "04ce407b-236f-45e3-abc1-3105a1cda7a2" ? (
                    <button onClick={() => {deleteComment(item.comment_id)}}>
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
                      <button  onClick={() => {deleteComment(item.comment_id)}}>
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
                      <Button onClick={handleOpen} variant="gradient">
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
                      </Button>
                      <Dialog size="md" closeOnOutsideClick={false}  animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }} open={open} handler={handleOpen}>
        <DialogHeader>Edit your comment</DialogHeader>
        <DialogBody>
        <div className="">
          <Textarea
            className="border-gray-300 border-2 p-2 rounded-md"
            onChange={(e) => {
              setEdit(e.target.value);
            }}
          //  value={item.content}
            placeholder={item.content}
            rows={8}
          />
         
      
        </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => {handleOpen(); setEdit("") }}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button onClick={(e) => {e.preventDefault(); updateComment(item.comment_id)}} variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    
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
