import { defineCollection, z } from "astro:content";
const blog = defineCollection({
  schema:({image}) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .or(z.date())
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z
      .array(image())
      .optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
