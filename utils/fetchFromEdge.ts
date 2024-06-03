import { createClient } from "./supabase/server";


const supabase = createClient();


export async function fetchFromEdge(url){
    const session = await supabase.auth.getSession();
    let role;
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("id", session?.data?.session?.user.id as string);
    try {
      const roleDecoded = jwtDecode(user.data.session?.access_token);
      role = roleDecoded.user_role;
    } catch (e) {
      console.log(e);
    }
    return await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
      }})
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
}