// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://akmqtbgtrhrtflpflryn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrbXF0Ymd0cmhydGZscGZscnluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyMjMxMjgsImV4cCI6MjA1Nzc5OTEyOH0.NgRy3zaauqZIJK7IPmnhM2MGpJGD59hJVTk43GrHMfc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);