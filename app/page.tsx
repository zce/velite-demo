// import * as React from 'react'
// import * as _jsx_runtime from 'react/jsx-runtime'
// import * as ReactDOM from 'react-dom'

// import { pages } from '../.velite'

// async function getMDXExport(code: string, globals: any) {
//   const dataUrl = `data:text/javascript;base64,${btoa(code)}`
//   return import(dataUrl)
//   // const scope = { React, ReactDOM, _jsx_runtime, ...globals }
//   // // eslint-disable-next-line
//   // const fn = new Function(...Object.keys(scope), code)
//   // return fn(...Object.values(scope))
// }

import * as React from 'react'
import * as _jsx_runtime from 'react/jsx-runtime'
import * as runtime from 'react/jsx-runtime'
import { run } from '@mdx-js/mdx'
import * as ReactDOM from 'react-dom'

const code =
  'return (()=>{var g=Object.create;var c=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var _=Object.getPrototypeOf,b=Object.prototype.hasOwnProperty;var j=(o,n)=>()=>(n||o((n={exports:{}}).exports,n),n.exports),w=(o,n)=>{for(var t in n)c(o,t,{get:n[t],enumerable:!0})},i=(o,n,t,a)=>{if(n&&typeof n=="object"||typeof n=="function")for(let r of f(n))!b.call(o,r)&&r!==t&&c(o,r,{get:()=>n[r],enumerable:!(a=x(n,r))||a.enumerable});return o};var l=(o,n,t)=>(t=o!=null?g(_(o)):{},i(n||!o||!o.__esModule?c(t,"default",{value:o,enumerable:!0}):t,o)),y=o=>i(c({},"__esModule",{value:!0}),o);var d=j((X,m)=>{m.exports=_jsx_runtime});var C={};w(C,{default:()=>u,no:()=>k});var e=l(d());var h=l(d(),1),s=({children:o})=>(0,h.jsx)("button",{className:"bg-primary rounded p-2",children:o});var k=12;function p(o){let n={code:"code",h1:"h1",img:"img",p:"p",...o.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h1,{children:"Hello, world!"}),`' +
  '`,(0,e.jsx)(n.p,{children:"Below is an example of markdown in JSX."}),`' +
  '`,(0,e.jsxs)("div",{style:{backgroundColor:"violet",padding:"1rem"},children:["Try and change the background color to ",(0,e.jsx)(n.code,{children:"tomato"}),"."]}),`' +
  '`,(0,e.jsx)(s,{children:"Hello world"}),`' +
  '`,(0,e.jsx)(n.p,{children:(0,e.jsx)(n.img,{src:"./300.jpg",alt:"alt text"})}),`' +
  '`,`' +
  '`,(0,e.jsx)(n.p,{children:"3"}),`' +
  '`,(0,e.jsx)(n.h1,{children:"1"})]})}function u(o={}){let{wrapper:n}=o.components||{};return n?(0,e.jsx)(n,{...o,children:(0,e.jsx)(p,{...o})}):p(o)}return y(C);})();'

const getComponent = (code: string) => {
  const fn = new Function('React', 'ReactDOM', '_jsx_runtime', code)
  const { default: Component } = fn(React, ReactDOM, _jsx_runtime)
  return Component
}

const code2 = `
"use strict";
const {Fragment: _Fragment, jsx: _jsx, jsxs: _jsxs} = arguments[0];
const {default: Button} = await import(_resolveDynamicMdxSpecifier('./button'));
const no = 12;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    img: "img",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h1, {
      children: "Hello, world!"
    }), "\\n", _jsx(_components.p, {
      children: "Below is an example of markdown in JSX."
    }), "\\n", _jsxs("div", {
      style: {
        backgroundColor: 'violet',
        padding: '1rem'
      },
      children: ["Try and change the background color to ", _jsx(_components.code, {
        children: "tomato"
      }), "."]
    }), "\\n", _jsx(Button, {
      children: "Hello world"
    }), "\\n", _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "./300.jpg",
        alt: "alt text"
      })
    }), "\\n", "\\n", _jsx(_components.p, {
      children: "3"
    }), "\\n", _jsx(_components.h1, {
      children: "3"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
return {
  no,
  default: MDXContent
};
function _resolveDynamicMdxSpecifier(d) {
  if (typeof d !== "string") return d;
  try {
    new URL(d);
    return d;
  } catch {}
  if (d.startsWith("/") || d.startsWith("./") || d.startsWith("../")) return new URL(d, "file:///Users/zce/Local/velite-demo/content/index.mdx").href;
  return d;
}
`

const getComponent2 = (code: string) => {
  const fn = new Function('args', code)
  const { default: Component } = fn(React, ReactDOM, _jsx_runtime)
  return Component
}

export default async function Page() {
  // const Component = await getComponent(code)

  const { default: Content } = await run(code2, { ...runtime })

  return (
    <h1>
      Hello, Next.js!
      <Content />
    </h1>
  )
}
