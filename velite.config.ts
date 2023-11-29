import { defineConfig, s } from 'velite'

export default defineConfig({
  schemas: {
    pages: {
      name: 'Page',
      pattern: 'pages/**/*.md',
      schema: s.object({
        title: s.string().max(99),
        slug: s.slug('global'),
        code: s.mdx()
      })
    }
  }
})
