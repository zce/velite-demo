import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { bundleMDX } from 'mdx-bundler'

process.env.NODE_ENV = 'development'

const compileMdx = async (source: string): Promise<string> => {
  const { code } = await bundleMDX({ source, cwd: resolve('content'), esbuildOptions: options => ({ ...options, minify: false }) })
  return code
}

const source = await readFile('content/index.mdx', 'utf8')
await Promise.all(
  [2].map(async i => {
    const code = await compileMdx(source + '\n\n' + `# ${i}`)
    writeFile(`content/index-${i}.js`, code)
  })
)
