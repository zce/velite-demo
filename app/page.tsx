import * as React from 'react'
import * as _jsx_runtime from 'react/jsx-runtime'
import * as ReactDOM from 'react-dom'

import { pages } from '../.velite'

async function getMDXExport(code: string, globals: any) {
  const dataUrl = `data:text/javascript;base64,${btoa(code)}`
  return import(dataUrl)
  // const scope = { React, ReactDOM, _jsx_runtime, ...globals }
  // // eslint-disable-next-line
  // const fn = new Function(...Object.keys(scope), code)
  // return fn(...Object.values(scope))
}
export default async function Page() {
  const list = await pages()
  const { code } = list[0]
  const { default: Component, ...globals } = await getMDXExport(code, {})
  console.log(Component)
  return <h1>Hello, Next.js!</h1>
}
