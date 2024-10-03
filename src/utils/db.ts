import { createClient } from "@supabase/supabase-js"

export const db = createClient(
  import.meta.env.VITE_DATABASE_URL!,
  import.meta.env.VITE_DATABASE_PASSWORD!,
)
