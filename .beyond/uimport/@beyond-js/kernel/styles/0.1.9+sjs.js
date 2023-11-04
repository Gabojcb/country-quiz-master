{"code":"System.register([\"@beyond-js/kernel@0.1.9/bundle\",\"@beyond-js/kernel@0.1.9/core\"], (_exports, _context) => {\n\nconst bimport = specifier => {\n\tconst dependencies = new Map([[\"@beyond-js/kernel\",\"0.1.9\"]]);\n\treturn globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));\n};\n\n\nvar dependencies = new Map();\nvar require = dependency => dependencies.get(dependency);\nreturn {\nsetters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep)],\nexecute: function() {\n// Prevent esbuild from considering the context to be amd\nconst define = void 0;\nconst module = {};\n\nconst code = (module, require) => {\nvar __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all) __defProp(target, name, {\n    get: all[name],\n    enumerable: true\n  });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {\n      get: () => from[key],\n      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable\n    });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", {\n  value: mod,\n  enumerable: true\n}) : target, mod));\nvar __toCommonJS = mod => __copyProps(__defProp({}, \"__esModule\", {\n  value: true\n}), mod);\n\n// .beyond/uimport/@beyond-js/kernel/styles.0.1.9.js\nvar styles_0_1_9_exports = {};\n__export(styles_0_1_9_exports, {\n  DependenciesStyles: () => DependenciesStyles,\n  V1Styles: () => V1Styles,\n  __beyond_pkg: () => __beyond_pkg,\n  hmr: () => hmr,\n  styles: () => styles\n});\nmodule.exports = __toCommonJS(styles_0_1_9_exports);\n\n// node_modules/@beyond-js/kernel/styles/styles.browser.mjs\nvar dependency_0 = __toESM(require(\"@beyond-js/kernel@0.1.9/bundle\"), 0);\nvar dependency_1 = __toESM(require(\"@beyond-js/kernel@0.1.9/core\"), 0);\nvar import_meta = {};\nvar {\n  Bundle: __Bundle\n} = dependency_0;\nvar __pkg = new __Bundle({\n  \"module\": {\n    \"vspecifier\": \"@beyond-js/kernel@0.1.9/styles\"\n  },\n  \"type\": \"ts\"\n}, _context.meta.url).package();\n;\n__pkg.dependencies.update([[\"@beyond-js/kernel/core\", dependency_1]]);\nvar ims = /* @__PURE__ */new Map();\nims.set(\"./dependencies-styles\", {\n  hash: 282408023,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.DependenciesStyles = void 0;\n    var _bundle = require2(\"@beyond-js/kernel/bundle\");\n    var _core = require2(\"@beyond-js/kernel/core\");\n    var _registry = require2(\"./registry\");\n    class DependenciesStyles2 extends _core.Events {\n      #vspecifier;\n      #elements;\n      get elements() {\n        return this.#elements;\n      }\n      constructor(vspecifier) {\n        super();\n        this.#vspecifier = vspecifier;\n        const change = () => this.trigger(\"change\");\n        this.#elements = /* @__PURE__ */new Set();\n        const recursive = vspecifier2 => {\n          if (!vspecifier2) {\n            console.trace(\"Bundle vspecifier not defined\");\n            return;\n          }\n          if (!_bundle.instances.has(vspecifier2)) {\n            console.error(`Bundle id \"${vspecifier2}\" not found. Try refreshing the page.\nIf the problem still persist, delete the BeyondJS cache and try again.`);\n            return;\n          }\n          const bundle = _bundle.instances.get(vspecifier2);\n          if (vspecifier2 !== this.#vspecifier && bundle.type === \"widget\") return;\n          const styles2 = _registry.styles.get(vspecifier2);\n          if (styles2 && styles2.engine !== \"legacy\") {\n            this.#elements.add(styles2);\n            styles2.on(\"change\", change);\n          }\n          const {\n            dependencies\n          } = bundle.package();\n          dependencies.forEach(dependency => {\n            const pkg = dependency.__beyond_pkg;\n            if (!pkg) return;\n            recursive(pkg.vspecifier);\n          });\n        };\n        recursive(this.#vspecifier);\n      }\n    }\n    exports.DependenciesStyles = DependenciesStyles2;\n  }\n});\nims.set(\"./legacy\", {\n  hash: 859564821,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.default = void 0;\n    class _default {\n      get engine() {\n        return \"legacy\";\n      }\n      #bundle;\n      #value;\n      get value() {\n        return this.#value;\n      }\n      #appended = false;\n      get appended() {\n        return this.#appended;\n      }\n      constructor(bundle, value) {\n        this.#bundle = bundle;\n        const module2 = (() => {\n          const module3 = bundle.split(\"/\");\n          module3.pop();\n          return module3.join(\"/\");\n        })();\n        const regexp = /#host\\.([\\w\\d]*)#([^.]*\\.[\\w\\d]*)/g;\n        this.#value = value.replace(regexp, (match, host, resource) => {\n          if (host === \"module\" || host === \"library\") {\n            return `${module2}/${resource}`;\n          } else if (host === \"application\") {\n            return resource;\n          }\n          console.warn(`Invalid css host specification on bundle \"${bundle}\"`, match);\n        });\n      }\n      appendToDOM(is) {\n        if (this.#appended) {\n          const previous = document.querySelectorAll(`:scope > [bundle=\"${this.#bundle}\"]`)[0];\n          previous && document.removeChild(previous);\n        }\n        const css = document.createElement(\"style\");\n        css.appendChild(document.createTextNode(this.#value));\n        is && css.setAttribute(\"is\", is);\n        document.getElementsByTagName(\"head\")[0].appendChild(css);\n        this.#appended = true;\n      }\n    }\n    exports.default = _default;\n  }\n});\nims.set(\"./registry\", {\n  hash: 2402124624,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.styles = void 0;\n    var _legacy = require2(\"./legacy\");\n    var _v = require2(\"./v1\");\n    class Registry {\n      #registry = /* @__PURE__ */new Map();\n      register(vspecifier, value) {\n        if (this.#registry.has(vspecifier)) return;\n        const styles3 = value ? new _legacy.default(vspecifier, value) : new _v.V1Styles(vspecifier);\n        this.#registry.set(vspecifier, styles3);\n        return styles3;\n      }\n      has(vspecifier) {\n        return this.#registry.has(vspecifier);\n      }\n      get(vspecifier) {\n        return this.#registry.get(vspecifier);\n      }\n    }\n    const styles2 = new Registry();\n    exports.styles = styles2;\n    globalThis.beyondLegacyStyles = styles2;\n  }\n});\nims.set(\"./v1\", {\n  hash: 1891964101,\n  creator: function (require2, exports) {\n    \"use strict\";\n\n    Object.defineProperty(exports, \"__esModule\", {\n      value: true\n    });\n    exports.V1Styles = void 0;\n    var _core = require2(\"@beyond-js/kernel/core\");\n    var _bundle = require2(\"@beyond-js/kernel/bundle\");\n    class V1Styles2 extends _core.Events {\n      get engine() {\n        return \"v1\";\n      }\n      #bundle;\n      get bundle() {\n        return this.#bundle;\n      }\n      #version = 0;\n      get version() {\n        return this.#version;\n      }\n      #resource;\n      get resource() {\n        return this.#resource;\n      }\n      get href() {\n        const version = this.#version ? `?version=${this.#version}` : \"\";\n        return `${this.#resource}${version}`;\n      }\n      constructor(resource) {\n        super();\n        this.#bundle = _bundle.instances.get(resource);\n        this.#resource = (() => {\n          if (typeof process === \"object\") {\n            const split = resource.split(\"/\");\n            const pkg = split[0].startsWith(\"@\") ? `${split.shift()}/${split.shift()}` : split.shift();\n            const subpath = split.join(\"/\");\n            return `##_!${pkg}!_##${subpath}.css`;\n          }\n          let {\n            uri\n          } = this.#bundle;\n          const regexp = new RegExp(\"^https?://cdn.beyondjs.com\", \"i\");\n          if (regexp.test(uri)) {\n            const {\n              origin,\n              pathname,\n              searchParams\n            } = new URL(uri);\n            const version = searchParams.has(\"version\") ? `&version=${searchParams.get(\"version\")}` : \"\";\n            return origin + pathname + \"?css\" + version;\n          }\n          uri = uri.slice(0, uri.length - 3);\n          return `${uri}.css`;\n        })();\n      }\n      change() {\n        this.#version++;\n        this.trigger(\"change\");\n      }\n    }\n    exports.V1Styles = V1Styles2;\n  }\n});\n__pkg.exports.descriptor = [{\n  \"im\": \"./dependencies-styles\",\n  \"from\": \"DependenciesStyles\",\n  \"name\": \"DependenciesStyles\"\n}, {\n  \"im\": \"./registry\",\n  \"from\": \"styles\",\n  \"name\": \"styles\"\n}, {\n  \"im\": \"./v1\",\n  \"from\": \"V1Styles\",\n  \"name\": \"V1Styles\"\n}];\nvar DependenciesStyles, styles, V1Styles;\n__pkg.exports.process = function ({\n  require: require2,\n  prop,\n  value\n}) {\n  (require2 || prop === \"DependenciesStyles\") && (DependenciesStyles = require2 ? require2(\"./dependencies-styles\").DependenciesStyles : value);\n  (require2 || prop === \"styles\") && (styles = require2 ? require2(\"./registry\").styles : value);\n  (require2 || prop === \"V1Styles\") && (V1Styles = require2 ? require2(\"./v1\").V1Styles : value);\n};\nvar __beyond_pkg = __pkg;\nvar hmr = new function () {\n  this.on = (event, listener) => void 0;\n  this.off = (event, listener) => void 0;\n}();\n__pkg.initialise(ims);\n};\n\ncode(module, require);\n_exports(module.exports);\n}}});\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2tlcm5lbC9zdHlsZXMuMC4xLjkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvc3R5bGVzL19fc291cmNlcy9zdHlsZXMvZGVwZW5kZW5jaWVzLXN0eWxlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9zdHlsZXMvX19zb3VyY2VzL3N0eWxlcy9sZWdhY3kudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvc3R5bGVzL19fc291cmNlcy9zdHlsZXMvcmVnaXN0cnkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvc3R5bGVzL19fc291cmNlcy9zdHlsZXMvdjEudHMiXSwibmFtZXMiOlsic3R5bGVzXzBfMV85X2V4cG9ydHMiLCJfX2V4cG9ydCIsIkRlcGVuZGVuY2llc1N0eWxlcyIsIlYxU3R5bGVzIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwic3R5bGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9idW5kbGUiLCJyZXF1aXJlMiIsIl9jb3JlIiwiX3JlZ2lzdHJ5IiwiRGVwZW5kZW5jaWVzU3R5bGVzMiIsIkV2ZW50cyIsInZzcGVjaWZpZXIiLCJlbGVtZW50cyIsImNvbnN0cnVjdG9yIiwiY2hhbmdlIiwidHJpZ2dlciIsIlNldCIsInJlY3Vyc2l2ZSIsInZzcGVjaWZpZXIyIiwiY29uc29sZSIsInRyYWNlIiwiaW5zdGFuY2VzIiwiaGFzIiwiZXJyb3IiLCJidW5kbGUiLCJnZXQiLCJ0eXBlIiwic3R5bGVzMiIsImVuZ2luZSIsImFkZCIsIm9uIiwiZGVwZW5kZW5jaWVzIiwicGFja2FnZSIsImZvckVhY2giLCJkZXBlbmRlbmN5IiwicGtnIiwiX2RlZmF1bHQiLCJ2YWx1ZSIsImFwcGVuZGVkIiwibW9kdWxlMiIsIm1vZHVsZTMiLCJzcGxpdCIsInBvcCIsImpvaW4iLCJyZWdleHAiLCJyZXBsYWNlIiwibWF0Y2giLCJob3N0IiwicmVzb3VyY2UiLCJ3YXJuIiwiYXBwZW5kVG9ET00iLCJpcyIsInByZXZpb3VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQ2hpbGQiLCJjc3MiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsInNldEF0dHJpYnV0ZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZGVmYXVsdCIsIl9sZWdhY3kiLCJfdiIsIlJlZ2lzdHJ5IiwicmVnaXN0cnkiLCJNYXAiLCJyZWdpc3RlciIsInN0eWxlczMiLCJzZXQiLCJnbG9iYWxUaGlzIiwiYmV5b25kTGVnYWN5U3R5bGVzIiwiVjFTdHlsZXMyIiwidmVyc2lvbiIsImhyZWYiLCJwcm9jZXNzIiwic3RhcnRzV2l0aCIsInNoaWZ0Iiwic3VicGF0aCIsInVyaSIsIlJlZ0V4cCIsInRlc3QiLCJvcmlnaW4iLCJwYXRobmFtZSIsInNlYXJjaFBhcmFtcyIsIlVSTCIsInNsaWNlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBQTtBQUFBQyxRQUFBLENBQUFELG9CQUFBO0VBQUFFLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBLEdBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVQsb0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBLElBQUFVLE9BQUEsR0FBQUMsUUFBQTtJQUNBLElBQUFDLEtBQUEsR0FBQUQsUUFBQTtJQUNBLElBQUFFLFNBQUEsR0FBQUYsUUFBQTtJQUdpQixN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","dependencies":[{"id":"@beyond-js/kernel@0.1.9/bundle","path":"E:\\workspace\\side-projects\\country-quiz-master\\country-quiz\\node_modules\\@beyond-js\\kernel"},{"id":"@beyond-js/kernel@0.1.9/core","path":"E:\\workspace\\side-projects\\country-quiz-master\\country-quiz\\node_modules\\@beyond-js\\kernel"}],"warnings":[]}