import { defineConfig, shared, z } from 'velite'

const slugify = input =>
  input
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')

const icon = z.enum(['bilibili', 'github', 'instagram', 'kuaishou', 'medium', 'qq', 'rss', 'threads', 'tiktok', 'twitter', 'wechat', 'weibo', 'x', 'youtube', 'zhihu', 'douyin'])
const count = z.object({ total: z.number(), posts: z.number(), courses: z.number() }).default({ total: 0, posts: 0, courses: 0 })

export default defineConfig({
  schemas: {
    options: {
      name: 'Option',
      pattern: 'options/index.yml',
      single: true,
      fields: z.object({
        url: z.string(),
        name: shared.name(),
        title: shared.title(),
        slogan: shared.title(),
        description: shared.paragraph().optional(),
        keywords: z.array(z.string()),
        author: z.object({ name: z.string(), email: z.string().email(), url: z.string().url() }),
        links: z.array(z.object({ text: z.string(), link: z.string(), type: z.enum(['navigation', 'footer', 'copyright']) })),
        socials: z.array(z.object({ name: z.string(), icon, link: z.string().optional(), image: shared.image().optional() })),
        official: z.object({ title: z.string(), image: shared.image() }),
        liveroom: z.number()
      })
    },
    authors: {
      name: 'Author',
      pattern: 'authors/index.yml',
      fields: z
        .object({
          name: shared.name(),
          slug: shared.slug('global'),
          email: z.string().email().optional(),
          avatar: shared.image().optional(),
          cover: shared.image().optional(),
          bio: shared.paragraph().optional(),
          website: z.string().url().optional(),
          location: z.string().max(20).optional(),
          socials: z.record(z.string(), z.string().url()).optional(),
          meta: shared.meta(),
          count
        })
        .transform(data => ({ ...data, permalink: `/${data.slug}` }))
    },
    categories: {
      name: 'Category',
      pattern: 'categories/index.yml',
      fields: z
        .object({
          name: shared.name(),
          slug: shared.slug('global'),
          cover: shared.image().optional(),
          description: shared.paragraph().optional(),
          meta: shared.meta(),
          count
        })
        .transform(data => ({ ...data, permalink: `/${data.slug}` }))
    },
    tags: {
      name: 'Tag',
      pattern: 'tags/index.yml',
      fields: z
        .object({
          name: shared.name(),
          slug: shared.slug('global'),
          cover: shared.image().optional(),
          description: shared.paragraph().optional(),
          meta: shared.meta(),
          count
        })
        .transform(data => ({ ...data, permalink: `/${data.slug}` }))
    },
    pages: {
      name: 'Page',
      pattern: 'pages/**/*.md',
      fields: z
        .object({
          title: shared.title(),
          slug: shared.slug('global'),
          cover: shared.image().optional(),
          video: shared.file().optional(),
          description: shared.paragraph().optional(),
          draft: z.boolean().default(false),
          private: z.boolean().default(false),
          comment: z.boolean().default(false),
          meta: shared.meta(),
          body: shared.mdx()
        })
        .transform(data => ({ ...data, permalink: `/${data.slug}` }))
    },
    posts: {
      name: 'Post',
      pattern: 'posts/**/*.md',
      fields: z
        .object({
          title: shared.title(),
          slug: shared.slug('post'),
          date: shared.date(),
          updated: shared.date().optional(),
          cover: shared.image().optional(),
          video: shared.file().optional(),
          audio: shared.file().optional(),
          description: shared.paragraph().optional(),
          draft: z.boolean().default(false),
          private: z.boolean().default(false),
          featured: z.boolean().default(false),
          comment: z.boolean().default(true),
          authors: z.array(z.string()).default(['汪磊']),
          categories: z.array(z.string()).default(['未分类']),
          tags: z.array(z.string()).default([]),
          meta: shared.meta(),
          body: shared.markdown()
        })
        .transform(data => ({ ...data, permalink: `/${data.slug}` }))
    },
    courses: {
      name: 'Courses',
      pattern: 'courses/**/*.md',
      fields: z
        .object({
          title: shared.title(),
          slug: shared.slug('course'),
          date: shared.date(),
          updated: shared.date().optional(),
          cover: shared.image().optional(),
          description: shared.paragraph().optional(),
          draft: z.boolean().default(false),
          private: z.boolean().default(false),
          featured: z.boolean().default(false),
          comment: z.boolean().default(true),
          authors: z.array(z.string()).default(['汪磊']),
          categories: z.array(z.string()).default(['未分类']),
          tags: z.array(z.string()).default([]),
          sections: z.array(z.object({ title: shared.title(), description: shared.paragraph().optional(), duration: z.number(), source: shared.file().optional() })).default([]),
          meta: shared.meta(),
          body: shared.markdown()
        })
        .transform(data => ({ ...data, permalink: `/${data.slug}` }))
    }
  },
  onSuccess: ({ options, authors, categories, tags, pages, posts, courses }) => {
    console.log('options ------------------------------------------------')
    console.log(options.name)
    console.log('authors ------------------------------------------------')
    console.log(authors.length)
    console.log('categories ------------------------------------------------')
    console.log(categories.length)
    console.log('tags ------------------------------------------------')
    console.log(tags.length)
    console.log('pages ------------------------------------------------')
    console.log(pages.length)
    console.log('posts ------------------------------------------------')
    console.log(posts.length)
    console.log('courses ------------------------------------------------')
    console.log(courses.length)
  }
})
