//////////*1*//////////
/*
let obj = { d: 10 };
let mapObj = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
  ["d", 4],
]);
console.log(mapObj);
*/
//////////*2*//////////
/*
function mapSum(obj) {
  let sum = 0;
  for (let value of obj.values()) {
    sum += value;
  }
  return sum;
}

let obj = new Map([
  ["a", 2],
  ["b", 5],
  ["c", 3],
]);
console.log(mapSum(obj));
*/
//////////*3*//////////
//////////*4*//////////
//////////*5*//////////
/*
function setUnion(set1, set2) {
  let setUnion = new Set([...set1, ...set2]);
  return setUnion;
}
let set1 = new Set([1, 2, 3]);
let set2 = new Set([2, 3, 4]);
console.log(setUnion(set1, set2));
*/
//////////*6*//////////
/*
function setIntersection(set1, set2) {
  let intersection = new Set();
  for (let el of set1) {
    if (set2.has(el)) {
      intersection.add(el);
    }
  }
  return intersection;
}
let set1 = new Set([1, 2, 3]);
let set2 = new Set([2, 3, 4]);
console.log(setIntersection(set1, set2));
*/
//////////*7*//////////
/*
let checkSetSubset = function (set1, set2) {
  for (let el of set1) {
    if (!set2.has(el)) {
      return false;
    }
  }
  return true;
};
let set1 = new Set([1, 2]);
let set2 = new Set([1, 2, 3, 4]);
console.log(checkSetSubset(set1, set2));
*/
//////////*8*//////////
/*
let removeDuplicates = function (arr) {
  return [...new Set(arr)];
};
let arr = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr));
*/
//////////*9*//////////
/*
let arr1 = [1, 5, 8];
let arr2 = [7, 9, 10];

let combinedArr = [...arr1, ...arr2];
mergeArr = function (ar1, arr2) {};
console.log(combinedArr);
*/
//////////*10*/ ////////
/*
let concatArrays = function () {
  let arr = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  return [].concat(...arr);
};
let flatArr = concatArrays();
console.log(flatArr);
*/
