import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
export const dynamic = 'force-dynamic';
export function createClient() {

  // Create a server's supabase client with newly configured cookie,
  // which could be used to maintain user's session
  return createServerClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
 }