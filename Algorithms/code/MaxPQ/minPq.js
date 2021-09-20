// 实现最小堆
// 根结点最小
var MinPQ = (function() {
    function MinPQ(max) {
        this.m = max;
    }

    // 向队列中插入一个元素
    MinPQ.prototype.insert = function(v) {
        
    }

    // 删除并返回最小元素
    MinPQ.prototype.delMin = function() {}

    // 返回队列是否为空
    MinPQ.prototype.isEmpty = function() {}

    // 返回元素个数
    MinPQ.prototype.size = function() {}

    // 对元素进行比较
    MinPQ.prototype.less = function(v, w) {
        return (this.arr[v] <= this.arr[w]);
    }

    // 将元素交换
    MinPQ.prototype.exch = function(i, j) {
        let t = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = t;
    }

    // 打印
    MinPQ.prototype.show = function() {
        console.log(this.arr.join(','));
    }

    return MinPQ;
})();

module.exports = MinPQ;
