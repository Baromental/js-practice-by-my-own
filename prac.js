// function getOrderQuantity(order) {
//   return console.log(order.length)
// }
// getOrderQuantity(["apple", "peach", "pear", "banana"])
// getOrderQuantity(["apple", "banana"]);
// getOrderQuantity(["apple", "banana", "pear"]);
// getOrderQuantity([]);


function getOrderQuantity(order) {
  return order.length
}
console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]));
console.log(getOrderQuantity(["apple", "banana"]));
console.log(getOrderQuantity(["apple", "banana", "pear"]));
console.log(getOrderQuantity([]));