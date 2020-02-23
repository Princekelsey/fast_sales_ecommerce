var a = [
  { name: "bob", age: 22, city: "tt" },
  { name: "alice", age: 12, city: "tallinn" },
  { name: "mike", age: 13, city: "tartu" }
];
var b = [
  { name: "bob", age: 62, city: "Abuja" },
  { name: "kevin", age: 32, city: "tallinn" },
  { name: "alice", age: 32, city: "Lagos" }
];

const remove_duplicates = (a, b) => {
  let newArr = [];
  b.filter(function(item) {
    for (var i = 0, len = a.length; i < len; i++) {
      if (a[i].name === item.name) {
        newArr.push({
          name: a[i].name,
          city: item.city
        });
      }
    }
    return false;
  });
  return newArr;
};

console.log(remove_duplicates(a, b));

let arrNew = [];
function remove_duplicates2(a, b) {
  for (var i = 0, len = a.length; i < len; i++) {
    for (var j = 0, len = b.length; j < len; j++) {
      if (a[i].name === b[j].name) {
        // b.splice(j, 1);
        // len2=b.length;
        arrNew.push({
          name: a[i].name,
          len: b[j].len
        });
        break;
      }
    }
  }

  console.log(arrNew);
  // console.log(b);
}

remove_duplicates2(a, b);
