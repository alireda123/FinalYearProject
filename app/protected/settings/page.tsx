import { createClient } from "@/utils/supabase/server";
import {  Suspense } from "react";
import SettingsComponents from "@/components/Settings/SettingsComponent";
import { redirect } from "next/navigation";
import { uploadToDatabase } from "./actions";


export default async function settings() {
  const supabase = createClient();
  const userdata = await supabase.auth.getUser();
  if (userdata.data.user === null) redirect("/");
  const upload = uploadToDatabase.bind(null, userdata.data.user)
  const { data } = await supabase
    .from("users")
    .select()
    .eq("id", userdata.data.user.id as string);
  return (
    <>
      <div className=" w-full flex flex-col items-center justify-center gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#000000]">
        <main className=" py-1 ">
          <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl navconfig:max-w-2xl sm:rounded-lg">
              <h2 className="pl-6 text-2xl font-bold navconfig:!text-4xl ">
                Public Profile
              </h2>
              <Suspense fallback={<div>Loading...</div>}>
                <form action={upload}>
                  <SettingsComponents user={data} />
                </form>
              </Suspense>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
