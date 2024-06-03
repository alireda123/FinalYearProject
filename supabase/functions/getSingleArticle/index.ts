

import {createClient} from '@/utils/supabase/server'



/// <reference types="https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts" />

console.log("Hello from Functions!")

Deno.serve(async (req: Request) => {
  // ... (Supabase client initialization)
  const supabase = createClient();
  if (req.method === "GET") {
    try {
      const {data, error}: PostgrestSingleResponse<articles[]|null> = await supabase.from("articles").select().eq("id", req.headers.id);
      if (error) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500, // Internal Server Error
        });
      }

      return new Response(JSON.stringify({ data }), { status: 201 }); // Created
    } catch (error) {
      return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
  }

  // ... (handle other HTTP methods if needed)
});
/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/signUp' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
