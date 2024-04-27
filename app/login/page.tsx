"use client";
//grabbed login UI from https://tailwindui.com/components/application-ui/forms/sign-in-forms
//grabbed login logic from https://supabase.com/docs/guides/auth/auth-helpers/nextjs
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/supabase";
import { Alert } from "@material-tailwind/react";
import { error } from "console";

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
//adapted crossicon function from material tailwind 
export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errormessage, setErrormessage] = useState<string>("");
  const router = useRouter();
  const supabase = createClient();

  const handleSignIn = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setErrormessage(error.message)
      return;
    }
    window.location.assign("/"); 
    
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="flex flex-col justify-center  [&>*]:p-3">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="max-w-sm sm:mx-auto sm:!w-full  text-center">
          <h2 className="mt-10 text-center text-3xl xl:!text-5xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in 
          </h2>
          <p className="xl:text-2xl xl:mt-3">Signing up will allow you to comment and submit claims.</p>
        </div>

        <div className="mt-10 sm:!w-full ">
          <form className="space-y-6" action="#" method="POST">
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
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  className="block w-full rounded-md border-0 py-1.5 xl:!py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm xl:!text-xl sm:leading-6"
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
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500 "
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="block w-full rounded-md border-0 py-1.5 xl:!py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-0.5 focus:ring-indigo-600 text-sm xl:!text-xl sm:leading-6"
                />
              </div>
            </div>
            {errormessage &&
            <Alert
              icon={<CrossIcon />}
              className="rounded-none border-l-4 border-[rgba(201,80,46,0.94)] bg-[hsla(0,63%,48%,1)] font-medium text-white"
            >
              {errormessage}
            </Alert>
}

            <div>
              <button
                onClick={handleSignIn}
                className="flex w-full text-white text-lg justify-center rounded-md bg-gradient-to-br from-blue-700 to-purple-500 px-3 py-1.5  font-semibold leading-6  shadow-sm"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm xl:!text-xl text-gray-500">
            Not a member?{" "}
            <a
              href="/signup"
              className="font-semibold leading-6 text-indigo-600 xl:!text-xl hover:text-indigo-500"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
