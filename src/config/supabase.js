
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    rocess.env.SUPABASE_URL, 
    process.env.SUPABASE_KEY
);

export default supabase;