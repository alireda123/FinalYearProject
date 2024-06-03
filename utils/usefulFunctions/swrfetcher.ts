import { createClient } from "../supabase/supabase";

const supabase = createClient();

export async function supabaseFetcher(table, arg, matcher) {
  const apiUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/${table}?${matcher}=eq.${arg}`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message); 
  }
}

export const fetcher = (...args) => fetch(...args).then(res => res.json())