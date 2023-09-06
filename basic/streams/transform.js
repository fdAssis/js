import { Transform, Readable, Writable } from "stream";
import { createWriteStream } from "fs";

const readable = Readable({
  read() {
    for (var i = 0; i <= 1e5; i++) {
      const person = {
        id: new Date().getMilliseconds() + i,
        name: "user-" + i,
      };
      this.push(JSON.stringify(person));
    }

    this.push(null);
  },
});

const mapFields = Transform({
  transform(chuck, encoding, callback) {
    const data = JSON.parse(chuck);

    const outcome = `${data.id},${data.name.toUpperCase()}\n`;

    callback(null, outcome);
  },
});

const mapHeader = Transform({
  transform(chuck, encoding, callback) {
    this.counter = this.counter ?? 0;
    if (this.counter) {
      return callback(null, chuck);
    }

    this.counter += 1;
    const header = "id,name\n";
    callback(null, header.concat(chuck));
  },
});

// const writable = Writable({
//   write(chuck, encoding, callback) {
//     console.log(chuck.toString());
//     callback();
//   },
// });

readable.pipe(mapFields).pipe(mapHeader).pipe(createWriteStream("user.csv"));
