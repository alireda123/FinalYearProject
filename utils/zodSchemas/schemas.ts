import { ZodObject, z } from "zod";

export const articleSchema = z.object({
    title: z.string().min(1, "Title is required"),
    content: z.string().min(1000),
    author_name: z.string().min(6, "Author name must be at least 6 characters"),
    author_id: z.string().uuid(),
    claimedSummary: z
      .string()
      .min(10, "What was claimed must be at least 10 characters"),
    ourConclusion: z
      .string()
      .min(10, "Our conclusion must be at least 10 characters"),
    type: z.enum(["domestic", "foreign"]).optional(), 
    summary: z
    .string()
    .min(10, "Summary must be at least 10 characters")
    .max(250, "Summary must be at most 250 characters"),
  });
export type ArticleFormData = z.infer<typeof articleSchema>;