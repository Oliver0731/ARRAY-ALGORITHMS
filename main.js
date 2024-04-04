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
let names = ["Amy", "Ben", "Carl"];
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

function myIndexOf(array, item) {}
function average() {}
function count() {}
function myMax() {}
function swap() {}
