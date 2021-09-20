function gen(len, complex = 100) {
    let arr = [];
    for (let i = 0; i < len; i ++) {
        let str = parseInt(Math.random() * complex);
        arr.push(str);
    }

    return arr;
}

module.exports = gen;