import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

export const supabase = createClient(
  'https://pwarzhqruilfrlzipxbq.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3YXJ6aHFydWlsZnJsemlweGJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0MjAwNzUsImV4cCI6MjA2NTk5NjA3NX0.GZtdgqzP_fgra1itrrAFdqk-gUh3aeP8SLCo4DgvgdU'
);
