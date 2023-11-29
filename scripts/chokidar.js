import { mkdir, writeFile } from 'fs/promises'
import chokidar from 'chokidar'

const watcher = chokidar.watch(['**/*.txt', '**/*.js'], {
  ignored: /(^|[\/\\])[\._]./, // ignore dot & underscore files
  ignoreInitial: true, // ignore initial scan
  awaitWriteFinish: { stabilityThreshold: 50, pollInterval: 10 }
})

watcher.on('all', (event, path) => {
  console.log(event, path)
})

await writeFile('test.txt', 'Hello World')
await writeFile('test2.txt', 'Hello World')
await mkdir('test', { recursive: true })
await writeFile('test/test2.txt', 'Hello World')
await mkdir('foo/bar', { recursive: true })
await writeFile('foo/bar/test2.txt', 'Hello World')

await writeFile('test.js', 'console.log("Hello World")')

setTimeout(async () => {
  watcher.close()
  process.exit(0)
}, 1000)
