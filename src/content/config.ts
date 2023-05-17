import { z, defineCollection } from "astro:content";
const hypeCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        thumbnail: z.string().optional(),
        url: z.string().optional(),
        publisher: z.string().optional(),
        date: z.date(),
    }),
});

const websitesCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        icon: z.string(),
        url: z.string(),
    }),
});

export const collections = {
    hype: hypeCollection,
    websites: websitesCollection,
};
