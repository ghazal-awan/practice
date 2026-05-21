for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// let cryptos = [ "bitcoin", "etherem", "solana","bnb"]
// for (let coin of cryptos) {
//   console.log(coin);
// }

let cryptos = [
  {name: "bitcoin", price: 81074},
  {name: "ethereum", price: 2300},
  {name: "bnb", price: 679}
];
for (let coin of cryptos) {
  console.log(coin.name + "- $" + coin.price)
}
