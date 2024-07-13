let age = 25;

if (age >= 20) {
  console.log("大人です");
} else if (age >= 12 && age <= 15) {
  console.loh("中学生です");
} else {
  console.log("子供です");
}

switch (age) {
  case 20:
    console.log("成人おめでとうございます");
    break;
  case 12:
  case 15:
  case 18:
    console.log("卒業おめでとうございます");
    break;
  default:
    console.log(`${age}才です`);
}

for (let i = 0; i < 5; i++) {
  console.log("こんにちは");
}

let i = 0;
while (i < 5) {
  console.log("こんにちは");
  i++;
}

let product = {
  name: "りんご",
  price: 100,
};

for (let key in product) {
  console.log(key);
}

let fruits = ["りんご", "みかん", "パイナップル"];
for (let fruit of fruits) {
  console.log(fruit);
}
