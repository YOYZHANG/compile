const assert = require('assert');
const Bst = require('./bst');
const gen = require('../share');


// const a = gen(10);
const a = [
    26, 62, 26, 59,  3,
    68, 15, 37,  5, 64
  ];
console.log(a);

// 选择排序
const bst = new Bst();

for (let [index, item] of a.entries()) {
    if (index === 5) {
        bst.put(item, 999);
    }
    else {
        bst.put(item, 1);
    }
    
}

// console.log(bst.print());

// bst.deleteMin();
// console.log(bst.print());

// console.log(bst.min())

// console.log(bst.max())

// bst.delete(62);
// console.log(bst.print());


assert.equal(bst.get(a[5]), 999, 'bst.get doesn`t work correctly');
// assert.equal(sort.isSorted(crResult), true, 'insert sort doesn`t work correctly');
// assert.equal(sort.isSorted(xrResult), true, 'insert sort doesn`t work correctly');
console.log('all passed');