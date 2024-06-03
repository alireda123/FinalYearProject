import { createClient } from "@/utils/supabase/server";
import ViewMisinformation from "@/components/ViewMisinformation/ViewMisinformation";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import jwt, { JwtPayload } from 'jsonwebtoken'
export default async function submitclaim(request: NextRequest) {

  const supabase = createClient();
  const {data: {session}} = await supabase.auth.getSession();
  if (session === null) redirect("/");
  
 const {user_role} = jwt.verify(session?.access_token, process.env.SUPABASE_JWT!)
  if(user_role !== 'admin') redirect("/")
  const { data, error } = await supabase.from("claims").select();

  return (
    <div className="flex flex-col max-w-[280px] tablet:max-w-sm  md:!max-w-4xl">
      <h1 className="text-2xl md:!text-4xl mb-8 font-extrabold my-16">
        Claims of misinformation
      </h1>
      {data &&
        data.map((item) => (
        <ViewMisinformation key={item.id} item={item} />
        ))}
    </div>
  );
}
