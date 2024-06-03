//import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import {createClient} from '@/utils/supabase/server'
// ... other imports
import {corsHeaders} from '../_shared_cors.ts'
Deno.serve(async (req: Request) => {
    // const supabase = createClient(
    //     Deno.env.get('SUPABASE_URL'),
    //     Deno.env.get('SUPABASE_ANON_KEY')
    // );

    const supabase = createClient();    
    if (req.method === 'GET') {
        try {
            const { data, error } = await supabase
                .from('articles')
                .select('*');
                console.log(data)
            if (error) {
                return new Response(JSON.stringify({ error: error.message }), { status: 500 });
            }
            console.log(data)
            return new Response(JSON.stringify({ data }),  {
                headers: {'Content-Type': 'application/json' },
                status: 200,
              }); // OK
        } catch (error) {
            return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
        }
    }
});


/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/signUp' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
