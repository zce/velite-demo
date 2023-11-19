var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// global-externals:react/jsx-runtime
var require_jsx_runtime = __commonJS({
  "global-externals:react/jsx-runtime"(exports, module) {
    module.exports = _jsx_runtime;
  }
});

// __faker_entry.mdx
var import_jsx_runtime2 = __toESM(require_jsx_runtime());

// button.jsx
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var button_default = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "bg-primary rounded p-2", children });

// __faker_entry.mdx
var no = 12;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    img: "img",
    p: "p",
    ...props.components
  };
  return (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, {
    children: [(0, import_jsx_runtime2.jsx)(_components.h1, {
      children: "Hello, world!"
    }), "\n", (0, import_jsx_runtime2.jsx)(_components.p, {
      children: "Below is an example of markdown in JSX."
    }), "\n", (0, import_jsx_runtime2.jsxs)("div", {
      style: {
        backgroundColor: "violet",
        padding: "1rem"
      },
      children: ["Try and change the background color to ", (0, import_jsx_runtime2.jsx)(_components.code, {
        children: "tomato"
      }), "."]
    }), "\n", (0, import_jsx_runtime2.jsx)(button_default, {
      children: "Hello world"
    }), "\n", (0, import_jsx_runtime2.jsx)(_components.p, {
      children: (0, import_jsx_runtime2.jsx)(_components.img, {
        src: "./300.jpg",
        alt: "alt text"
      })
    }), "\n", "\n", (0, import_jsx_runtime2.jsx)(_components.p, {
      children: "3"
    }), "\n", (0, import_jsx_runtime2.jsx)(_components.h1, {
      children: "4"
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? (0, import_jsx_runtime2.jsx)(MDXLayout, {
    ...props,
    children: (0, import_jsx_runtime2.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
export {
  MDXContent as default,
  no
};
