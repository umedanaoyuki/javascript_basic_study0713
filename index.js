console.log("hello worldテストです");
let nickname = "tarou";
console.log(nickname);
nickname = "sample";
console.log(nickname);
const firstName = "jirou";
console.log(firstName);

let fruit = "apple";
let age = 20;
let circleRation = 3.14;
let isActive = true;
let color;

let box = null;
console.log(typeof fruit);

// オブジェクト型
let product = {
  name: "りんご",
  price: 200,
};

console.log(product);
product.name = "みかん";
console.log(product.name);

product["price"] = 300;
console.log(product["price"]);

let fruits = ["りんご", "みかん"];
console.log(fruits);

fruits[0] = "バナナ";
console.log(fruits[0]);

fruits[2] = "パイナップル";
console.log(fruits);

console.log(fruits.length)
