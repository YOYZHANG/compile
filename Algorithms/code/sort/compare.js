const gen = require('../share');
const Sort = require('./sort');

const type = ['xzSort', 'crSort'];
function calcTime(name) {
    let sort = new Sort(gen(10000, 10));
    let begin = new Date().getTime();
    sort[name]()
    let end = new Date().getTime();

    console.log(`spend time is ... ${end - begin}`);
}

calcTime(type[0]);

module.exports = calcTime;