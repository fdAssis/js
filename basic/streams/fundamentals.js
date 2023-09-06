import { Readable, Transform, Writable } from "node:stream";

class ProgressBar extends Readable {
  index = 0;
  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 10) {
        this.push(null);
      } else {
        const buf = Buffer.from("=");
        this.push(buf);
      }
    }, 100);
  }
}

class ConcatProgressBar extends Transform {
  _transform(chunk, encoding, callback) {
    const transform = "|" + String(chunk) + "|";
    callback(null, Buffer.from(transform));
  }
}

class PrintProcessBar extends Writable {
  _write(chunk, encoding, callback) {
    console.log(String(chunk));
    callback();
  }
}

new ProgressBar().pipe(new ConcatProgressBar()).pipe(new PrintProcessBar());
