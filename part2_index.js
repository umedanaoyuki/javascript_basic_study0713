// const product = {
//   name: "りんご",
//   price: 100,
//   sayDescription: () => {
//     console.log("とっても甘いです");
//   },
// };

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   sayInfo() {
//     console.log(`${this.name}の値段は${this.price}円です`);
//   }

//   static sayFunctionDetail() {
//     console.log("productのオブジェクトで作るコンストラクターです")
//   }
// }

// const p1 = new Product("りんご", 100);
// const p2 = new Product("みかん", 150);
// const p3 = new Product("パイナップル", 200);

// p1.sayInfo();
// p2.sayInfo();
// p3.sayInfo();
// Product.sayFunctionDetail();

// product.stock = 5;
// console.log(product);

// delete product.stock;
// console.log(product)

let name1 = 'tarou'
let name2 = name1;

console.log(name1);
console.log(name2);

name1 = 'jiro'
console.log(name1);
console.log(name2);

const product1 = {
  name: 'りんご',
  price: 100,
}

let product2 = product1;
let product3 = { ...product1 }
product1.name = 'みかん';

console.log(product2)
console.log(product3);



