import { readFile, writeFile } from 'node:fs/promises'
import { compile } from '@mdx-js/mdx'

const compileMdx = async (source: string): Promise<string> => {
  const file = await compile(source, { outputFormat: 'function-body' })
  return file.toString()
}

const source = await readFile('content/index.mdx', 'utf8')
await Promise.all(
  [3].map(async i => {
    const code = await compileMdx(source + '\n\n' + `# ${i}`)
    writeFile(`content/index-${i}.js`, code)
  })
)
