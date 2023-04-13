// 1. Entry 

{
    entry: "./src/index.js"
}


{
    entry: ["./src/index.js", "./src/index2.js"]
}

{
    entry: {
        main: "./src/index.js"
    }
}

const ry = {
    entry: {
        app: ["./src/app1.js", "./src/app2.js"],
        adminapp: ["./src/adminapp1.js", "./src/adminapp2.js"]
    }
}

// This is the most scalable way of defining entry points. Because this gives the 
// flexibility in terms of specifying multiple entry points with each entry point
// having multiple independent files combined as one