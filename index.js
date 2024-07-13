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

console.log(fruits.length);

const outputProductInfo = (productName, productPrice) => {
  console.log("こんにちは");
  console.log(`${productName}の値段は、${productPrice}円です`);
};

outputProductInfo("みかん", 100);
outputProductInfo("りんご", 150);
outputProductInfo("パイナップル", 200);

const add = (a, b) => {
  return a + b;
};

console.log(add(1, 2));

let x = 10;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.lof(x / y);
console.log(x % y);
console.log(x ** 2);
console.log(++x); //11
console.log(x); //11
console.log(x++); // 11
console.log(x); // 12
console.log(--x); //11
console.log(x); //11
console.log(x--); //11
console.log(x); //10

x += 5;
console.log(x); // 15

x -= 5;
console.log(x); // 10

console.log(x > 5); // true
console.log(x > 20); // false

console.log(x < 20); // true
console.log(x < 5); // false

console.log(x <= 10); // true

console.log(x === 10); // true
console.log(x === 11); // false

console.log(x !== 11); // true
console.log(x !== 10); // false

console.log(1 === "1"); // false
console.log(1 == "1"); // true

let userAge = 25;
let userType = userAge > 20 ? "adult" : "child";
console.log(userType); // adult

// x = 10
console.log(x > 5 && x < 20); // true
console.log(x > 15 && x < 20); // false
console.log(x > 5 && x < 9); // false

console.log(x > 5 || x < 9); // true
console.log(x > 16 || x < 20); // true
console.log(x > 16 || x < 9); // false

console.log(!(x > 16)); // true

// falsy
undefined;
null;
0;
("");
NaN

console.log(true && 'a'); // a
console.log(false && "a"); // false
console.log(true || 1); // true
console.log(false || 1); // 1




