console.log("Hello, world! ");

const fs = require("fs/promises");


// Через проміс
// fs.readFile("./contacts")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

// Через асинхронну функцію
//   async function readFile(path, options) {
//   const data = await fs.readFile(path, options);

//   return data;
// }

//  readFile("index.js", { encoding: "utf-8" })
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// Через асинхронну функцію
// const readFile = async () => {
//     const data = await fs.readFile("path for file txt", { encoding: "utf-8" });
//     console.log(data);
// }
// readFile();
