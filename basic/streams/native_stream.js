// process.stdin.pipe(process.stdout);

// // terminal 1
// node -e "require('net').createServer((socket) => socket.pipe(process.stdout)).listen(9090)"

// // terminal 2
// node -e "process.stdin.pipe(require("net").connect(9090))"

// node -e "process.stdout.write(crypto.randomBytes(1e9))" > big.file

import http from "node:http";
import { readFileSync, createReadStream } from "fs";

http
  .createServer((req, res) => {
    // const file = readFileSync("big.file").toString();
    // res.write(file);
    // res.end();

    createReadStream("big.file").pipe(res);
  })
  .listen(6666, () => console.log("running at 6666 ✨"));
