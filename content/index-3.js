"use strict";
const {Fragment: _Fragment, jsx: _jsx, jsxs: _jsxs} = arguments[0];
const no = 12;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    img: "img",
    p: "p",
    ...props.components
  }, {Button} = _components;
  if (!Button) _missingMdxReference("Button", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "// import Button from './button'"
    }), "\n", _jsx(_components.h1, {
      children: "Hello, world!"
    }), "\n", _jsx(_components.p, {
      children: "Below is an example of markdown in JSX."
    }), "\n", _jsxs("div", {
      style: {
        backgroundColor: 'violet',
        padding: '1rem'
      },
      children: ["Try and change the background color to ", _jsx(_components.code, {
        children: "tomato"
      }), "."]
    }), "\n", _jsx(Button, {
      children: "Hello world"
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "./300.jpg",
        alt: "alt text"
      })
    }), "\n", "\n", _jsx(_components.p, {
      children: "3"
    }), "\n", _jsx(_components.h1, {
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
