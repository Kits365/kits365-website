import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
    githubUrl: z.string().optional(),
    technologies: z.array(z.string()).optional()
  }),
});

export const collections = {
  'projects': projectsCollection,
};

