'use client'
import { createContext, useEffect, useState } from "react";
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

export default function submitclaim() {

  const [claimName, setClaimName] = useState('');
  const [claim, setClaim] = useState('');
  const [errormessage, setErrormessage] = useState<string | null>(null);
  const router = useRouter();
  const submitClaim = async() => {
     
        const supabase = createClient()
        const { data } = await supabase.auth.getSession()
        
       
        const { error } = await supabase
          .from('claims')
          .insert({
            claim_name: claimName,
            claim_content: claim,
            claim_author_email: data.session.user.email,
            claim_author_id: data.session.user.id
        })
        if(error === null){
          setErrormessage(null)
          router.push("/")
          
        } else{
          if(error.message === 'new row for relation "claims" violates check constraint "claims_claim_content_check"')
          setErrormessage("You must write at least 5 characters for the name and more than 200 characters when summarising the claim")
        }
    }
    const supabase = createClient();

    useEffect(() => {
      async function grabUser(){
      const {
        data: { user },
      } = await supabase.auth.getUser();
    
      if (!user) {
        return router.push("/login");
      }
    }
    grabUser();
    }, [])
    

  return (
    <div className="flex flex-col max-w-2xl xl:max-w-4xl">
      <h1 className="text-4xl font-extrabold my-2">
        Submit a claim of misinformation
      </h1>
      <p>
      If you have seen any claims of misinformation that you believe may cause
        significant harm in society, summarise it below and provide the source
        of that misinformation. If we believe that it has a harmful effect, it
        will be fact checked and written about.
      </p>
      <div className="[&>*]:my-16">
        <form action={submitClaim}>
          <div className="flex flex-col [&>*]:my-2">
            <label className="text-xl" htmlFor="claimName">Claim name:</label>
            <input onChange={(e) => setClaimName(e.target.value)} type="text" className="rounded-md p-2 shadow-lg border-2 border-black" id="claimName" name="claimName"></input>

            <label className="text-xl" htmlFor="claimSummary">Summarise the claim:</label>
            <textarea
              name="claimSummary"
              className="rounded-lg p-2 shadow-lg border-2 border-black"
              id="claimSummary"
              onChange={(e) => setClaim(e.target.value)}
              cols="30"
              rows="10"
            ></textarea>
            
            <button className="font-bold text-xl">Submit Claim</button>
            {errormessage &&
            <Alert
              icon={<CrossIcon />}
              className="rounded-none border-l-4 border-[rgba(201,80,46,0.94)] bg-[hsla(0,63%,48%,1)] font-medium text-white"
            >
              {errormessage}
            </Alert>
}
          </div>

        </form>
        <div></div>
      </div>
      <div></div>
    </div>
  );
}
