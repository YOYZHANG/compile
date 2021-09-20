// 最大堆
//      10
//    5    7
// 3   4  2  6
var MaxPQ = (function() {
    function MaxPQ(max) {
        this.m = max;
        this.arr = [null]; // length: m + 1
        this.cur = 0; 
    }

    // 向队列中插入一个元素
    MaxPQ.prototype.insert = function(v) {
        // [null, v]
        this.arr.push(v);

        // 1
        this.cur++;

        // 从第 cur 个节点开始上浮, 形成有序堆
        this.swim(this.cur);
    }

    // 返回最大元素
    MaxPQ.prototype.max = function() {
        return this.arr[1];
    }

    // 删除并返回最大元素
    MaxPQ.prototype.delMax = function() {
        // 取堆顶最大值
        let max = this.arr[1];

        // 交换最后一个元素到第一个
        this.exch(1, this.cur--);
        this.arr.pop();

        // 下沉恢复最大堆
        this.sink(1);

        return max;
    }

    // 上浮
    // k -> k/2;
    MaxPQ.prototype.swim = function(k) {
        while (k > 1) {
            if (!this.less(k, parseInt(k/2))) {
                this.exch(k, parseInt(k/2));

                k = parseInt(k/2);
            }
            else {
                break;
            }
        }
    }

    // 下沉
    // k -> 2k
    // k -> 2k + 1
    MaxPQ.prototype.sink = function(k) {
        while (2 * k <= this.cur) {
            let j = 2 * k;
            if (j < this.cur && this.less(j, j+1)) {
                j++;
            }

            if (this.less(j, k)) {
                break;
            }
            this.exch(j, k);
            k = j;
        }
    }

    // 返回队列是否为空
    MaxPQ.prototype.isEmpty = function() {
        return this.cur === 0;
    }

    // 返回元素个数
    MaxPQ.prototype.size = function() {
        return this.arr.length;
    }

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

module.exports = MaxPQ;
