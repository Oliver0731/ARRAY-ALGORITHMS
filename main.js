let names = ["Amy", "Ben", "Carl", "Amy", "Ben"];
let nums = [
  1, 20, 456, 405, 2, 3, -14564564564564557666e23, 4598077664, 5, 6, 7, 8, 9,
  10, 100, 10000000,
];
/////////////////////////////////////////////////////////////////////////

function myIncludes(array, item) {
  let indicator = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == item) {
      i = array.length;
      return true;
      indicator = 1;
    }
  }
  if ((indicator === 0) | (indicator < 0)) {
    return false;
  }
}
if (myIncludes(names, "Ben")) {
  console.log(`Hello Ben`);
} else {
  console.log("where is ben");
}
if (myIncludes(names, "Oliver")) {
  console.log(`Hello Oliver`);
} else {
  console.log("where is Oliver");
}
if (myIncludes(names, "Amy")) {
  console.log(`Hello Amy`);
} else {
  console.log("where is Amy");
}
if (myIncludes(names, "Carl")) {
  console.log(`Hello Carl`);
} else {
  console.log("where is Carl");
}

//////////////////////////////////////////////////////////////////////

function myIndexOf(array, item) {
  let determin = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] == item) {
      determin = i;
      i = array.length;
    } else {
      determin = -1;
    }
  }
  return determin;
}
console.log(myIndexOf(names, "Ben"));
console.log(myIndexOf(names, "Oliver"));
/////////////////////////////////////////////////
function average(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total / array.length;
}
console.log(average(nums));
//////////////////////////////////////////////////////////////////////
function count(array, item) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == item) {
      count++;
    }
  }
  return count;
}
console.log(count(names, "Oliver"));
console.log(count(names, "Carl"));
console.log(count(names, "Ben"));
//////////////////////////////////////////////////////////////////////
function myMax(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

console.log(myMax(nums));
function swap(array, index1, index2) {
  let swap1 = array[index1];
  array[index1] = array[index2];
  array[index2] = swap1;
  return array;
}
console.log(swap(nums, 1, 2));
console.log(swap(nums, 0, 15));
