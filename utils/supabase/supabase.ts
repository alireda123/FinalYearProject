import { createBrowserClient } from "@supabase/ssr";
import { customStorageAdapter } from "./customstorageadapter";
import { Database } from '@/supabase'

export const createClient = () =>
  createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
