let newArr = [];
const filterRange = (arr, a, b) => {
  newArr = arr.filter((el, i, arr) => {
    return el >= a && el <= b
  });
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(newArr);
