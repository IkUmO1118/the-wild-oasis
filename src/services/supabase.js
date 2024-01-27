import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://rdrfzwsmhtzfcfjvvtrp.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkcmZ6d3NtaHR6ZmNmanZ2dHJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQxOTQxNzgsImV4cCI6MjAxOTc3MDE3OH0.lKw_D5QrsCXq1JGqy1yJfV9I8njZLOd5lcxI256dDyU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
