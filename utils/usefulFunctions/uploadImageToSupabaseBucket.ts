import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { createClient } from "@/utils/supabase/server";
const supabase = createClient();

export async function uploadImageToSupabaseBucket(bucketName: string, imageName: string, image: File|null|any) {
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(imageName, image, {
        cacheControl: "3600",
        upsert: false,
      });
  };

export function handleImageUpload (event: ChangeEvent<HTMLInputElement>, setImage: Dispatch<SetStateAction<File|null|any>>, setImageName:  Dispatch<SetStateAction<string>>)  {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setImage(selectedFile);
      setImageName(selectedFile.name);
    }
  };