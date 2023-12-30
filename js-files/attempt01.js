'use strict'

// const hello = "Hello";
// console.log(hello);
// var xxx = 12;
// console.log(xxx);

// let i = 0;
// while (i < 3) { // показується 0, далі 1, потім 2
//   alert( i );
//   i++;
// }

// function getExtremeElements(array) {
//   let meta = [];
//   meta[0] = array[0];
//   meta[1] = array[array.length - 1];
//   return meta;
// }

// function calculateEngravingPrice(message, pricePerWord) {
//   return message.split(" ").length * pricePerWord;
// }

// function checkStorage(storage, item) {
//   let message;
//   for(let i = 0; i < storage.length; i++) {
//     if(storage[i].toLowerCase() === item.toLowerCase()) {
//       message = `${item.toLowerCase()} is available to order!`;
//       break;
//     } else {
//       message = "Sorry! We are out of stock!";
//     }
//   }
//   return message;
// }


// function foo() {
//   const args = Array.from(arguments);
// 	return args;
// }

// foo(1, 2, 3); // Поверне "1-2-3"


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.key(apartment);

// function deliverPizza(pizzaName) {
//   console.log(`Delivering ${pizzaName} pizza.`);
// }

// function makePizza(pizzaName) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   return ;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// const words = [
//   "HTML",
//   "CSS",
//   "JS",
//   "React",
//   "JS",
//   "CSS",
//   "JS",
//   "Node.js",
//   "JS",
//   "React",
//   "CSS",
//   "React",
//   "HTML",
//   "Node.js",
// ];
// function unique(arr) {
//   let newArr = [];
//   for (const word of words) {
//     if (word === arr) {
//       newArr.push(word);
//     }
//   }
//   return newArr;
// }

// console.log(unique(["HTML", "CSS", "JS", "React", "JS", "CSS", "JS", "Node.js", "JS", "React", "CSS", "React", "HTML", "Node.js"]));
// console.log(unique(["HTML", "CSS", "JS", "React", "JS", "CSS", "JS"]));



// class Car {
//   static maxPrice = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.maxPrice) {
//       this.#price = newPrice
//     }
//     // this.#price = newPrice;
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000



// class Car {
//   static #maxPrice = 50000;
//   static checkPrice(price) {
//     return price > this.#maxPrice ? "Error! Price exceeds the maximum" : "Success! Price is within acceptable limits";
//   }

//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//     constructor({ email, access }) {
//         super(email);
//     this.access = access;
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"


// const image = document.querySelector(".image");
// console.log(image);
// console.log(image.src);
// console.log(image.alt);

// image.src = "https://picsum.photos/id/13/640/480";
// image.alt = "River Bank";

// console.log(image.src);
// console.log(image.alt);

// const el = document.querySelector(".text");
// const nested = document.querySelector(".sub-text");

// // ====================================================

// console.log(el.textContent);
// console.log(nested.textContent);

// const textEl = document.querySelector(".article-text");
// const titleEl = document.querySelector(".article-title");

// console.log(textEl);
// console.log(titleEl);

// titleEl.textContent = 'Welcome to Bahamas!';

const link = document.querySelector(".link");
console.log(link.classList);

const hasActiveClass = link.classList.contains("is-active");
console.log(`hasActiveClass - ${hasActiveClass}`);

link.classList.add("special");
console.log(link.classList);

link.classList.remove("is-active");
console.log(link.classList);

link.classList.toggle("is-active");
console.log(link.classList);

link.classList.replace("special", "regular");
console.log(link.classList);