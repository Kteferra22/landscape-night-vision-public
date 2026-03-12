/**
 * Image Upload Pipeline
 *
 * Demonstrates how user images are uploaded and stored using Supabase.
 * Images are later processed through Cloudinary optimization
 * before AI scene processing occurs.
 */

import { supabase } from "@/integrations/supabase/client";

export async function uploadImage(file: File) {
  const ext = file.name.split(".").pop();
  const path = `${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage
    .from("original-images")
    .upload(path, file);

  if (error) {
    throw new Error("Upload failed");
  }

  const { data } = supabase.storage
    .from("original-images")
    .getPublicUrl(path);

  return data.publicUrl;
}
