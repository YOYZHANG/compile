var MaxPQ = (function() {
    function MaxPQ(max) {
        
    }

    // 向队列中插入一个元素
    MaxPQ.prototype.insert = function(v) {

    }

    // 返回最大元素
    MaxPQ.prototype.max = function() {

    }

    // 删除并返回最大元素
    MaxPQ.prototype.delMax = function() {}

    // 返回队列是否为空
    MaxPQ.prototype.isEmpty = function() {}

    // 返回元素个数
    MaxPQ.prototype.size = function() {}

    // 对元素进行比较
    MaxPQ.prototype.less = function(v, w) {
        return (this.arr[v] <= this.arr[w]);
    }

    // 将元素交换
    MaxPQ.prototype.exch = function(i, j) {
        let t = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = t;
    }

    // 打印
    MaxPQ.prototype.show = function() {
        console.log(this.arr.join(','));
    }

    // 验证是否排序
    MaxPQ.prototype.isSorted = function(newArr) {
       for (let i = 1; i < newArr.length; i++) {
           if (!this.less(i - 1, i)) {
               return false;
           }
       }

       return true;
    }
    
    return MaxPQ;
})();

module.exports = Sort;
