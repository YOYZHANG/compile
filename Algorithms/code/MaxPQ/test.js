const assert = require('assert');
const PQ = require('./pq');
const Min = require('./minPq');
const gen = require('../share');

const init = gen(20);
const m = 5;

const pq = new PQ(m);

for (let i = 0; i < init.length; i++) {
    pq.insert(init[i]);
    if (pq.size() > m + 1) {
        pq.delMax();
    }
}

let result = [];
while (!pq.isEmpty()) {
    result.push(pq.delMax());
}

assert.deepEqual(result.reverse(), init.sort((a, b) => a - b).slice(0, m), 'maxq doesn`t work correctly');

console.log('===========all passed!==============')

