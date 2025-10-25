import { createClient } from '@supabase/supabase-js'

// <<< MAKE SURE THESE VALUES MATCH YOUR SUPABASE PROJECT >>>
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)