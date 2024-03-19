const fs = require("fs");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const path = "./data";
if (!fs.existsSync(path)) {
  fs.mkdirSync(path);
}

const data = "./data/contact.json";
if (!fs.existsSync(data)) {
  fs.writeFileSync(data, "[]", "utf-8");
}

const pertanyaan1 = () => {
  return new Promise((res, rej) => {
    rl.question("Masukkan nama anda : ", (nama) => {
      res(nama);
    });
  });
};

const pertanyaan2 = () => {
  return new Promise((res, rej) => {
    rl.question("Masukkan email anda : ", (email) => {
      res(email);
    });
  });
};

const main = async () => {
  const nama = await pertanyaan1();
  const email = await pertanyaan2();
  const contact = { nama, email };
  const file = fs.readFileSync("data/contact.json", "utf-8");
  const contacts = JSON.parse(file);

  contacts.push(contact);
  fs.writeFileSync("data/contact.json", JSON.stringify(contacts));
  console.log(`Terimakasih ${nama} sudah memasukkan data`);
  rl.close();
};

main();
