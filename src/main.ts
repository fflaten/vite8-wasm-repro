// CSS file
// import base64 from "./style.raw?base64";           // Works
// import base64 from "./style.wasm?base64";             // Works

// WASM file
// import base64 from "./index_bg.raw?base64";        // ERROR - No such file or directory (os error 2)
import base64 from "./index_bg.wasm?base64";       // ERROR - No such file or directory (os error 2)

console.log('Hello Vite: ' + base64);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Hello Vite.</h1>
<p>${"Base64: " + base64}</p>
`
