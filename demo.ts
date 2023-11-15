import { bundleMDX } from 'mdx-bundler'

process.env.NODE_ENV = 'development'

const mdxSource = `
---
title: Example Post
published: 2021-02-13
description: This is some description
---

# Wahoo

import Demo from './demo'

Here's a **neat** demo:

<Demo />
`.trim()

bundleMDX({
  source: mdxSource,
  files: {
    './demo.tsx': `
import * as React from 'react'

function Demo() {
  return <div>Neat demo!</div>
}

export default Demo
    `
  }
}).then(result => {
  const { code, frontmatter } = result

  console.log(code)
})

// import { definitions } from 'mdast-util-definitions'
// import rehypeStringify from 'rehype-stringify'
// import remarkParse from 'remark-parse'
// import remarkRehype from 'remark-rehype'
// import { unified } from 'unified'
// import { SKIP, visit } from 'unist-util-visit'

// import type { Root } from 'mdast'
// import type { Plugin } from 'unified'

// const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// const myPlugin: Plugin<[], Root> = () => async (tree, file) => {
//   const definition = definitions(tree)
//   visit(tree, (node, index, parent) => {
//     console.log(node)
//   })
//   // await timeout(3000)
// }

// const demo = `
// [foo], [foo][], [bar][foo].

// ![foo], ![foo][], ![bar][foo].

// [foo]: ./image.jpg "Example Domain"

// 曾经是一名「互联网从业者」，目前是一名 **「灵活就业人员」**

// - GitHub：[@zce](https://github.com/zce)

// <!-- MAKE IT BETTER! -->

// > P.S. 好多人问我「zce」是什么？我就是随意拼写的，你可以记作「找茬儿」~

// `

// unified()
//   .use(remarkParse) // Parse markdown content to a syntax tree
//   .use(myPlugin)
//   .use(remarkRehype) // Turn markdown syntax tree to HTML syntax tree, ignoring embedded HTML
//   .use(rehypeStringify) // Serialize HTML syntax tree
//   .process(demo)
//   .then(file => {
//     // console.log(file.data)
//     console.log(String(file))
//   })
//   .catch(error => {
//     throw error
//   })
