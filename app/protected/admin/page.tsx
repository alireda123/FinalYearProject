// MyRichTextEditor.js
"use client";
import React, { useRef, useState, useEffect, ChangeEvent } from "react";
import Test from "@/components/Test";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { Alert } from "@material-tailwind/react";

function CrossIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}


export default  function App() {
  //grabbed from https://www.tiny.cloud/docs/tinymce/latest/react-pm-bundle/
  const supabase = createClient();
  const editorRef = useRef(null);
  const router = useRouter();
  const [errormessage, setErrorMessage] = useState('')
  const [imageObject, setImageObject] = useState();
  const [errordetected, setErrorDetected] = useState(false);  
  const [errormessages, setErrorMessages] = useState([])
  const log = async () => {
    if (editorRef.current !== null) {
      const final = { ...sendData, content: editorRef.current.getContent() };
      Object.keys(sendData).forEach(key => {
        if (sendData[key] === "") {
            setErrorMessages([...errormessages, `Error: ${key} is empty`]);
        }
    });
      const { error } = await supabase
        .from('articles')
        .insert(final)
        console.log(error)
    if(error){
      if(error.message === `new row for relation "articles" violates check constraint "articles_author_name_check"`){
        setErrorMessage("Author name must be longer than 6 characters")
      } else{
        setErrorMessage(error.message)
      }
        return;
    } else{
      uploadImageToSupabaseBucket();
      router.push('/')      
    }
    }
  };
  useEffect(() => {
    async function checkIfUser(){
      const {
        data,
      } = await supabase.auth.getUser();
      
      if (!data.user) {
        return useRouter().push("/login");
      }

    }
    checkIfUser();
  },[])
 

  async function uploadImageToSupabaseBucket() {
    const { data, error } = await supabase
    .storage
    .from('articleimages')
    .upload(sendData.image, imageObject, {
      cacheControl: '3600',
      upsert: false
    })
    console.log(error)
  }
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSendData({
        ...sendData,
        image: event.target.files[0].name,
      });
      setImageObject(event.target.files[0])
      console.log(event.target.files[0].name)
    }
  };
  const [sendData, setSendData] = useState({
    title: "",
    content: "",
    type: "",
    author_name: "",
    author_id: "04ce407b-236f-45e3-abc1-3105a1cda7a2",
    claimedSummary: "",
    ourConclusion: "",
    image: "",
    summary: ""
  });
  // div relative w-64 until closing corresponding div was taken from https://v1.tailwindcss.com/components/forms
  return (
    <div className="flex mt-24 flex-col">
      <h1 className="text-5xl font-extrabold">Submit Article:</h1>
      {errormessage && errormessages.map(item => {
            <Alert
            icon={<CrossIcon />}
            className="rounded-none border-l-4 border-[rgba(201,80,46,0.94)] bg-[hsla(0,63%,48%,1)] font-medium text-white"
            >
            {item}
            </Alert>
                  })
           
}
      <div className="flex flex-col mt-8 mb-9  ">
        <label className="text-xl font-bold">Title:</label>
        <input
          onChange={(e) => {
            setSendData({ ...sendData, title: e.target.value });
          }}
          className="max-w-56 rounded-lg px-1 mb-4 border-black border-2"
          type="text"
          required
        />
        <label className="text-xl font-bold">Author:</label>
        <input
          onChange={(e) => {
            setSendData({ ...sendData, author_name: e.target.value });
          }}
          className="max-w-56 rounded-lg px-1 mb-4 border-black border-2"
          type="text"
          required
        />

        <label className="text-xl font-bold">What was claimed:</label>
        <textarea
          onChange={(e) => {
            setSendData({ ...sendData, claimedSummary: e.target.value });
          }}
          className=" rounded-lg px-1 mb-4 border-black border-2"
          rows={3}
          required
        />

        <label className="text-xl font-bold">Our conclusion:</label>
        <textarea
          onChange={(e) => {
            setSendData({ ...sendData, ourConclusion: e.target.value });
          }}
          className=" rounded-lg px-1 mb-4 border-black border-2"
          rows={5}
          required
        />
         <label className="text-xl font-bold">Summary:</label>
        <textarea
          onChange={(e) => {
            setSendData({ ...sendData, summary: e.target.value });
          }}
          className=" rounded-lg px-1 mb-4 border-black border-2"
          rows={5}
          required
          maxLength={100}
        />

        <label className="text-xl font-bold">Type:</label>
        <div className="inline-block mb-4 relative w-64">
          <select
            onChange={(e) => {
              setSendData({ ...sendData, type: e.target.value });
            }}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option>domestic</option>
            <option>foreign</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <label className="text-xl font-bold">Image:</label>
        <input
          className="mb-3"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        <div>
        {image && (
       //   <Image src={image} alt="Profile Picture" width={200} height={200} />
       <img src={imageObject} alt="Profile Picture" width={200} height={200}></img>
        )}
        </div>
      </div>
      <Test
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: true,
          plugins: [
            "advlist",
            "anchor",
            "autolink",
            "help",
            "image",
            "link",
            "lists",
            "searchreplace",
            "table",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <div className="mt-4">
        <button
          className="p-1 text-lg bg-red-500 rounded-md border-white border-2 text-white shadow-xl"
          onClick={log}
        >
          Submit Article
        </button>
      </div>
    </div>
  );
}
