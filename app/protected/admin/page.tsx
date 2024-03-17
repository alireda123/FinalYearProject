// MyRichTextEditor.js
'use client'
import React, { useRef, useState, ChangeEvent } from 'react';
import Test from '@/components/Test'
import Image from "next/image"
export default function App() {
  //grabbed from https://www.tiny.cloud/docs/tinymce/latest/react-pm-bundle/
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const [image, setImage] = useState();
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
    setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className='flex flex-col'>
    <h1 className='text-5xl font-extrabold'>Submit Article:</h1>
    <div className='flex flex-col mt-8 mb-9  max-w-56'>
    <label className='text-xl font-bold'>Title:</label>
    <input className=' rounded-lg px-1 mb-4 border-black border-2' type="text" required />
    <label className='text-xl font-bold'>Author:</label>
    <input className=' rounded-lg px-1 mb-4 border-black border-2' type="text" required />
    <label className='text-xl font-bold'>Author:</label>
    <div className="inline-block relative w-64">
  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option>domestic</option>
    <option>foreign</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
    <label className='text-xl font-bold'>Image:</label>
    <input className='mb-3' type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <Image src={image} alt="Profile Picture" width={200} height={200} />}
    </div>
      <Test
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue='<p>This is the initial content of the editor.</p>'
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'advlist', 'anchor', 'autolink', 'help', 'image', 'link', 'lists',
            'searchreplace', 'table', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <div className='mt-4'>
      <button className='p-1 text-lg bg-red-500 rounded-md border-white border-2 text-white shadow-xl'  onClick={log}>Submit Article</button>
      </div>
    </div>
  );
}