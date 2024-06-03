'use server'
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { useRouter } from 'next/router';

export default async function SearchResultsPage({ params }: { params: { id: string } }) {
  // ... display searchResults
  // const cookieStore = cookies();
  // const supabase = createServerClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  //   {
  //     cookies: {
  //       get(name: string) {
  //         return cookieStore.get(name)?.value
  //       },
  //     },
  //   }
  //)
  return (
    <div></div>
  );
}
