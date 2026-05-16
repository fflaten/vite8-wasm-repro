# Bug - WASM import error in Vite 8

Importing a WASM file using a base64 vite-plugin throws error using Vite 8, while same code works with Vite 7.

## FAILS - Vite 8

```
PS /workspaces/Website/demo/repro> npm run build

> repro@0.0.0 build
> tsc && vite build

vite v8.0.10 building client environment for production...
✓ 4 modules transformed.
✗ Build failed in 24ms
error during build:
Build failed with 1 error:

[UNLOADABLE_DEPENDENCY] Error: Could not load src/index_bg.wasm?base64
   ╭─[ src/main.ts:1:20 ]
   │
 1 │ import base64 from "./index_bg.wasm?base64";
   │                    ────────────┬───────────
   │                                ╰───────────── No such file or directory (os error 2)
───╯

    at aggregateBindingErrorsIntoJsError (file:///workspaces/Website/demo/repro/node_modules/rolldown/dist/shared/error-DL-e8-oE.mjs:48:18)
    at unwrapBindingResult (file:///workspaces/Website/demo/repro/node_modules/rolldown/dist/shared/error-DL-e8-oE.mjs:18:128)
    at #build (file:///workspaces/Website/demo/repro/node_modules/rolldown/dist/shared/rolldown-build-DSxL8qiP.mjs:3317:34)
    at async buildEnvironment (file:///workspaces/Website/demo/repro/node_modules/vite/dist/node/chunks/node.js:33018:64)
    at async Object.build (file:///workspaces/Website/demo/repro/node_modules/vite/dist/node/chunks/node.js:33440:19)
    at async Object.buildApp (file:///workspaces/Website/demo/repro/node_modules/vite/dist/node/chunks/node.js:33437:153)
    at async CAC.<anonymous> (file:///workspaces/Website/demo/repro/node_modules/vite/dist/node/cli.js:778:3) {
  errors: [Getter/Setter]
}
```

**Same code works if you downgrade to Astro v6 + Vite 7.**

## WORKS - Vite 7

```
PS /workspaces/Website/demo/repro> npm run build

> repro@0.0.0 build
> tsc && vite build

vite v7.3.3 building client environment for production...
transforming (1) src/main.tstransforming /workspaces/Website/demo/repro/src/index_bg.wasm?base64
✓ 4 modules transformed.
dist/index.html                    0.38 kB │ gzip:     0.26 kB
dist/assets/index-IDZ-cLI8.js  3,305.65 kB │ gzip: 1,272.85 kB

(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
✓ built in 272ms
```
