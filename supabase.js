import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ugcszqbynhtqyqmjosez.supabase.co'; // <- from Supabase
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnY3N6cWJ5bmh0cXlxbWpvc2V6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4ODAyMzEsImV4cCI6MjA2MzQ1NjIzMX0.8jyNVO8JLHUGsdzUbaEB8Ha5y9YV0m7VZYhNFbJk83g'; // <- from Supabase API settings

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
