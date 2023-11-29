import { mkdir, writeFile } from 'fs/promises'
import chokidar from 'chokidar'
import glob from 'fast-glob'

const watcher = chokidar.watch(['**/*.txt', '**/*.demo'], {
  ignored: /(^|[\/\\])[\._]./, // ignore dot & underscore files
  ignoreInitial: true, // ignore initial scan
  awaitWriteFinish: { stabilityThreshold: 50, pollInterval: 10 }
})

watcher.on('all', (event, path) => {
  console.log(event, path)
})

setTimeout(async () => {
  await writeFile('test.txt', 'Hello World')
  await writeFile('test2.txt', 'Hello World')
  await mkdir('test', { recursive: true })
  await writeFile('test/test2.txt', 'Hello World')
  await mkdir('foo/bar', { recursive: true })
  await writeFile('foo/bar/test2.txt', 'Hello World')

  await mkdir('foo/baz', { recursive: true })
  await writeFile('foo/baz/test.demo', 'console.log("Hello World")')

  console.log('---------------------------')

  console.log(await glob('**/*.txt'))

  console.log('---------------------------')

  setTimeout(() => {
    watcher.close()
    process.exit(0)
  }, 1000)
}, 1000)
