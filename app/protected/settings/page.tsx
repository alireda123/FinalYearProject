"use client";
import Settings from "@/components/Settings";
import { createClient } from "@/utils/supabase/supabase";
import router from "next/router";
import { useEffect, useState } from "react";
//grabbed serttings page UI from https://kopi.dev/tailwind/profile-settings-using-tailwind-ui/
export default function settingspage() {
  const supabase = createClient();
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState();
  const [imageName, setImageName] = useState("");
  const [pfp, setPfp] = useState("");
  async function uploadImageToSupabaseBucket() {
    const { data, error } = await supabase.storage
      .from("userprofilepictures")
      .upload(imageName, image, {
        cacheControl: "3600",
        upsert: false,
      });
    console.log(error);
  }
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]), setImageName(event.target.files[0].name);
    }
  };
  const img =
    "https://szitjksnkskfwbckrzfc.supabase.co/storage/v1/object/public/userprofilepictures/";
  async function fetchUser() {
    const session = await supabase.auth.getSession();
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("id", session.data.session?.user.id);
    console.log(data);
    setUser(data);
    setEmail(data[0].email);
    setUsername(data[0].username);
  }
  useEffect(() => {
    async function grabUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        return router.push("/login");
      }
    }
    grabUser();
    fetchUser();
  }, []);

  async function updateUser(e) {
    e.preventDefault();
    console.log(email, username);
    if (email.length > 0 && username.length > 5) {
      const { error } = await supabase.auth.updateUser({
        email,
      });
      const { data } = await supabase
        .from("users")
        .update({ username: username, pfp: imageName })
        .eq("id", user[0].id);
        uploadImageToSupabaseBucket();
    }
  }
  return (
    <>
      {user && (
        <div className=" w-full flex flex-col items-center justify-center gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#000000]">
          <main className=" py-1 ">
            <div className="p-2 md:p-4">
              <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl navconfig:max-w-2xl sm:rounded-lg">
                <h2 className="pl-6 text-2xl font-bold navconfig:!text-4xl ">
                  Public Profile
                </h2>
                <div className="grid max-w-2xl mx-auto mt-8">
                  <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                    {!image ?
                    <img
                      className="object-cover w-40 h-40 p-1 rounded-full border-black ring-2 "
                      src={img + user[0].pfp}
                      alt="Bordered avatar"
                    /> :
                      <img
                      className="object-cover w-40 h-40 p-1 border-black rounded-full ring-2 "
                      src={URL.createObjectURL(image)}
                      alt="Bordered avatar"
                      >
                      </img>
}

                    <div className="flex flex-col space-y-5 sm:ml-8">
                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer border-2 navconfig:!text-xl border-black p-2 rounded-md"
                      >
                        Choose File
                      </label>
                      <input
                        type="file"
                        id="file-upload"
                        onChange={handleImageUpload}
                        required
                        style={{ display: "none" }}
                        className="py-3.5  px-7 text-base font-medium hover:cursor-pointer  focus:outline-none  rounded-lg border border-black  focus:z-10 focus:ring-4 "
                      ></input>
                    </div>
                  </div>
                  <div className="items-center mt-8 sm:mt-14 text-[#000000]">
                    <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                      <div className="w-full">
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-sm font-medium text-black navconfig:!text-xl"
                        >
                          Your name
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          onChange={(e) => {
                            setUsername(e.target.value);
                          }}
                          className="border border-black text-sm navconfig:!text-xl text-black rounded-lg  block w-full p-2.5 "

                          defaultValue={user[0].username}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-2 sm:mb-6">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm navconfig:!text-xl font-medium text-black">
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        className="border border-black text-sm navconfig:!text-xl rounded-lg  block w-full p-2.5 "
                        defaultValue={user[0].email}
                        required
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={updateUser}
                        className="text-white border border-white  font-medium rounded-lg text-sm navconfig:!text-xl w-full sm:w-auto px-5 py-2.5 text-center bg-gradient-to-br from-blue-700 to-purple-700"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
}
