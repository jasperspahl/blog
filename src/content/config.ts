import { defineCollection, z} from "astro:content";
const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z
            .string()
            .or(z.date()).transform(val => new Date(val)),
        updatedDate: z
            .string()
            .optional()
            .transform(str => (str? new Date(str) : undefined)),
        heroImage: z.array(z.object({src: z.string(), alt: z.string().optional()})).optional(),
        tags: z.array(z.string()).optional()
    }),
});

export const collections = {blog};