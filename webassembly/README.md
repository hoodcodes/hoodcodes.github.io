[Home](../)

# WebAssembly Reference

### Reference Links

- [What is WebAssembly?](https://blog.stackpath.com/webassembly/)
- [40min Rust, WebAssembly, and the future of Serverless by Steve Klabnik](https://www.youtube.com/watch?v=CMB6AlE1QuI)
- [25min An Introduction to WebAssembly](https://www.youtube.com/watch?v=3sU557ZKjUs)

### Fast Facts

- WebAssembly is a solution to a problem... ;-)
- WebAssembly is code that has been compiled for the browser
- Using WebAssembly for JavaScript as an example, the executable bytecode is miniscule in size compared to normal JS.
- Stack based assembly languages: Where all variables are on the stack. You push them on. Pop them off.

How WebAssembly Works
Wasm programs are deployed in two stages. First, a Wasm module is generated from the source code:

1. Write the application in your preferred language.
1. Create a pre-compiled Wasm module.
1. Distribute the module—ideally, using a CDN for low latency.

Once the Wasm module is built, it can be run anywhere with a few lines of JavaScript glue:

1. Load the Wasm module.
1. Create an instance of the module.
1. Call the instance’s functions.

The primary motivation behind WebAssembly was to enable developers to run advanced applications in browsers. Nevertheless, nothing prevents you from running Wasm modules on servers or as serverless functions.

WebAssembly programs can go where no JavaScript has gone before, namely media edition, image recognition, transcoding, VR and high-end games, emulation, or desktop-tier applications.
