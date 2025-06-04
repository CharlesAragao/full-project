import { createClient } from '@supabase/supabase-js';

console.log("SUPABASE_URL:", process.env.SUPABASE_URL);  // só para testar

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default supabase;