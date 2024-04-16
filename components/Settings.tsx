"use client";
import { useState } from "react";
import Avatar from "react-avatar-edit";
export default function Settings({user}) {
  const [preview, setPreview] = useState(null);
  function onClose() {
    setPreview(null);
  }
  function onCrop(pv) {
    setPreview(pv);
  }
  function onBeforeFileLoad(elem) {
    if (elem.target.files[0].size > 2000000) {
      alert("File is too big!");
      elem.target.value = "";
    }
  }
console.log(user)
  return (
    
    <div className="max-w-3xl [&>*]:m-1  flex flex-col justify-start ">
    {user && (  <><h1 className="text-5xl font-extrabold">Settings</h1>
      <div className="">
        <h2 className="text-lg font-bold mb-3">Profile picture</h2>
        <Avatar
          width={100}
          height={100}
          label="add pfp"
          onCrop={onCrop}
          onClose={onClose}
          onBeforeFileLoad={onBeforeFileLoad}
          src={null}
        />
        {preview && (
          <>
            <img src={preview} alt="Preview" />
            <a href={preview} download="avatar"> 
              Download image
            </a>
          </>
        )}
      </div>

      <div className="font-bold">Email Address</div>
      <input className="p-2 rounded-md" placeholder={user[0].email}></input>
      <div className="font-bold">Username</div>
      <input className="p-2 rounded-md" placeholder={user[0].name}></input>
      <div className="mt-4 flex flex-col [&>*]:mb-4">
      <button className="bg-red-700 max-w-36 py-1 rounded-xl border-blue-700 border-2">Change password</button>
      <button className="bg-red-700 max-w-36 py-1 rounded-xl  border-blue-700 border-2">Delete Account</button>
      <p>Warning: deleting your account will result in not being able to get the account back. This decision cannot be reversed</p>
      </div>
      </>
        )}
          </div>
  );
}
