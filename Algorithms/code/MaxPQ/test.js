const assert = require('assert');
const PQ = require('./pq');


const pq = new PQ();



// assert.equal(sort.isSorted(result), true, 'select sort doesn`t work correctly');
// assert.equal(sort.isSorted(crResult), true, 'insert sort doesn`t work correctly');
assert.equal(sort.isSorted(xrResult), true, 'insert sort doesn`t work correctly');
sort.show();

