import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://cfnnhbqzhlwdjbykyttn.supabase.co";
const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmbm5oYnF6aGx3ZGpieWt5dHRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NTA0NTUsImV4cCI6MjA2MTIyNjQ1NX0.OJfDu1TTMeZe_sOgfIVLzEohnOb65qGnLWKUPXVH9dw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false
    }
});
