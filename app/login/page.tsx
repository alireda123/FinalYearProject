import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { RedirectType, redirect } from "next/navigation";
import { NextResponse } from "next/server";

async function login(formData: FormData) {
  "use server";
  const supabase = createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
 // console.log(data, error)
  if (error) {
    console.log(error)
    return;
  }

  
  revalidatePath('/', 'layout');
  redirect('/')

}
// async function login(formData: FormData) {
//   "use server"
//   const supabase = createClient();
//   const email = formData.get("email") as string;
//   const password = formData.get("password") as string;

//   try {
//       const { data, error } = await supabase.auth.signInWithPassword({
//           email,
//           password,
//       });

//       if (error) {
//           // return new NextResponse(JSON.stringify({ message: error.message }), {
//           //     status: 400,
//           // });
//           console.log(error)
//       }

//       revalidatePath("/", "layout");

//       redirect("/"); // Redirect after successful login and revalidation
//   } catch (error) {
//       console.log("Unexpected error during login:", error);
//       // return new NextResponse(JSON.stringify({ message: "An unexpected error occurred" }), {
//       //     status: 500,
//       // });
//   }
// }

export default function Login() {
  return (
    <div className="flex flex-col justify-center  [&>*]:p-3">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="max-w-sm sm:mx-auto sm:!w-full  text-center">
          <h2 className="mt-10 text-center text-3xl xl:!text-5xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in
          </h2>
          <p className="xl:text-2xl xl:mt-3">
            Signing up will allow you to comment and submit claims.
          </p>
        </div>

        <div className="mt-10 sm:!w-full ">
          <form className="space-y-6" action={login}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm xl:!text-xl font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 xl:!py-2 bg-white text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm xl:!text-xl sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm  xl:!text-xl font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 xl:!py-2 text-black bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-0.5 focus:ring-indigo-600 text-sm xl:!text-xl sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button type='submit' className="flex w-full text-white text-lg justify-center rounded-md bg-gradient-to-br from-blue-700 to-purple-500 px-3 py-1.5  font-semibold leading-6  shadow-sm">
                Sign in
              </button>
            </div>
           

          </form>
          <div
  id="g_id_onload"
  data-client_id="<client ID>"
  data-context="signin"
  data-ux_mode="popup"
  data-callback="handleSignInWithGoogle"
  data-nonce=""
  data-auto_select="true"
  data-itp_support="true"
  data-use_fedcm_for_prompt="true"
></div>

<div
  className="g_id_signin"
  data-type="standard"
  data-shape="pill"
  data-theme="outline"
  data-text="signin_with"
  data-size="large"
  data-logo_alignment="left"
></div>

          <p className="mt-10 text-center text-sm xl:!text-xl text-gray-500">
            Not a member?{" "}
            <a
              href="/signup"
              className="font-semibold leading-6 text-indigo-600 xl:!text-xl  hover:text-indigo-500"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
    
  );
  
}

