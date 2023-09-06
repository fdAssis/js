import { Readable } from "node:stream";

class SayHello extends Readable {
  index = 1;
  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 10) {
        this.push(null);
      } else {
        const buf = Buffer.from("hello");
        this.push(buf);
      }
    }, 100);
  }
}

fetch("http://localhost:3232", {
  method: "POST",
  body: new SayHello(),
})
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    console.log(data);
  });
