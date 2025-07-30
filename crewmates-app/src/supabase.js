import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://gskgmlndohoxasiwxjzj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdza2dtbG5kb2hveGFzaXd4anpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4MzgzMzIsImV4cCI6MjA2OTQxNDMzMn0.Xqmrb4xIkrvWm3CVcncQCQR7xn8JduYpTD29CGW9Dpo'
);