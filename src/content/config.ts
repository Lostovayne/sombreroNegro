import { defineCollection, reference, z } from "astro:content";

const proyectCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      image: image(),
      tags: z.array(z.string()),
    }),
});

export const collections = {
  projects: proyectCollection,
};
