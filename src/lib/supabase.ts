import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface StudentNote {
  id: number;
  created_at: string;
  student_name: string;
  class_name: string;
  message: string;
  card_theme: "cream" | "amber" | "sage";
  image_url?: string | null;
  likes_count: number;
}

export interface NoteComment {
  id: number;
  created_at: string;
  note_id: number;
  author_name: string;
  comment_text: string;
}