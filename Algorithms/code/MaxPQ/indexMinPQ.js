var IndexMinPQ = (function() {
    function IndexMinPQ(max) {
        this.m = max;
    }

    // 向队列中插入一个元素, 索引为 k
    IndexMinPQ.prototype.insert = function(k, item) {

    }

    // 将索引为 k 的元素设为 item
    IndexMinPQ.prototype.change = function(k, item) {

    }

    // 是否存在索引为 k 的元素
    IndexMinPQ.prototype.contains = function(k) {

    }

    // 删除索引 k 极其相关的元素
    IndexMinPQ.prototype.delete = function(k) {

    }

    // 返回最小元素
    IndexMinPQ.prototype.min = function() {

    }

     // 返回最小元素索引
     IndexMinPQ.prototype.minIndex = function() {

    }

    // 删除并返回最小元素
    IndexMinPQ.prototype.delMin = function() {}

    // 返回队列是否为空
    IndexMinPQ.prototype.isEmpty = function() {}

    // 返回元素个数
    IndexMinPQ.prototype.size = function() {}

    // 对元素进行比较
    IndexMinPQ.prototype.less = function(v, w) {
        return (this.arr[v] <= this.arr[w]);
    }

    // 将元素交换
    IndexMinPQ.prototype.exch = function(i, j) {
        let t = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = t;
    }

    // 打印
    IndexMinPQ.prototype.show = function() {
        console.log(this.arr.join(','));
    }
    
    return IndexMinPQ;
})();

module.exports = Sort;
