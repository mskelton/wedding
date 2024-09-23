import { createClient } from "@supabase/supabase-js"

export const db = createClient(
  process.env.NEXT_PUBLIC_DATABASE_URL!,
  process.env.NEXT_PUBLIC_DATABASE_PASSWORD!,
)
