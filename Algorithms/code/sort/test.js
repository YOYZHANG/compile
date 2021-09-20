const assert = require('assert');
const Sort = require('./sort');
const gen = require('./share');


const a = gen(50);

// 选择排序
const sort = new Sort(a);
// const result = sort.xzSort();
// const crResult = sort.crSort();
const xrResult = sort.xrSort();

console.log(xrResult);

// assert.equal(sort.isSorted(result), true, 'select sort doesn`t work correctly');
// assert.equal(sort.isSorted(crResult), true, 'insert sort doesn`t work correctly');
assert.equal(sort.isSorted(xrResult), true, 'insert sort doesn`t work correctly');
sort.show();

