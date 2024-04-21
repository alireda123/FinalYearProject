'use client'
import { createContext, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { Alert } from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
  // grabbed Card component from https://www.material-tailwind.com/docs/react/card
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
  const [claims, setClaims] = useState<null | []>(null);
  const [errormessage, setErrormessage] = useState<string | null>(null);
  
  const router = useRouter();
 
  const supabase = createClient();

    useEffect(() => {
    async function grabClaims(){
        
        const { data, error } = await supabase
          .from('claims')
          .select()
          setClaims(data);
          console.log(data)
    }
      async function grabUser(){
      const {
        data: { user },
      } = await supabase.auth.getUser();
    
      if (!user) {
        return router.push("/login");
      }
      console.log(user)
      if(user && user.id !== "04ce407b-236f-45e3-abc1-3105a1cda7a2"){
        return router.push("/home");
      }
    }
    grabUser();
    grabClaims();
    
    }, [])
    

  return (
    <div className="flex flex-col max-w-[280px] tablet:max-w-sm  md:!max-w-4xl">
      <h1 className="text-2xl md:!text-4xl mb-8 font-extrabold my-16">
        Claims of misinformation
      </h1>
      {claims && claims.map(item => (
        <Card color="transparent " shadow={false} className="w-full border-2 border-gray-200 p-3 mb-4 mt-2 max-w-[600px]">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-4 pt-0 pb-8"
        >
         
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <Typography variant="h5" className="text-sm font-bold md:!text-2xl" color="blue-gray">
                Email: {item.claim_author_email}
              </Typography>
              
            </div>
          
          </div>
        </CardHeader>
        <CardBody className="mb-6  p-0">
            <p className="font-extrabold">{item.claim_name}</p>
          <Typography>
            {item.claim_content} gdfgsfd
          </Typography>
        </CardBody>
      </Card>
      ))}
    </div>
  );
}
