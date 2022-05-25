Array.prototype.reduce = function (process, initial) {
  for (let i = 0; i < this.length; i++) {
    if (!initial) {
      i++;
      initial = this[0];
    }
    initial = process(initial, this[i]);
  }
  return initial;
};

const res1 = [1, 2, 3].reduce(function (sum, next) {
  return sum + next;
}, 0);
const res = ["a", "b", "a"].reduce(function (obj, elem) {
  if (!obj[elem]) obj[elem] = 0;
  obj[elem] += 1;
  return obj;
}, {});

const res2 = ["a", "y", "!"].reduce(function (x, y) {
  return x + y;
}, "y"); // 'yay!'

console.log(res1);
console.log(res);
console.log(res2);
