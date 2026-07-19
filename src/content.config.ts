import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  // `image()` permet à Astro d'optimiser automatiquement l'image via astro:assets
  // (chemin relatif au fichier .md, ex: "../../assets/blog/post-1.jpg")
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      excerpt: z.string(),
      image: image(),
      author: z.string(),
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = { blog };
