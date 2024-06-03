import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { uploadToDatabase } from "./actions";

export default async function adduserdetails() {
  const supabase = createClient();
  const userdata = await supabase.auth.getUser();
  if (userdata.data.user === null) redirect("/");
  const upload = uploadToDatabase.bind(null, userdata.data.user);
  const { data } = await supabase
    .from("users")
    .select()
    .eq("id", userdata?.data?.user?.id as string);

  return (
    <div className="flex flex-col items-center justify-center p-3 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-8 sm:max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">
          Confirm User
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Add your username and profile picture.
        </p>

        <form action={upload} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="profile-picture"
              className="block text-sm font-medium text-gray-700"
            >
              Profile picture
            </label>
            <input
              type="file"
              id="profile-picture"
              name="profile-picture"
              required
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-md hover:opacity-90 focus:outline-none"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
