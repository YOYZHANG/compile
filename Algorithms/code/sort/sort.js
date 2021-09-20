var Sort = (function() {
    function Sort(arr) {
        this.arr = arr;
    }

    // 对元素进行比较
    Sort.prototype.less = function(v, w) {
        return (this.arr[v] <= this.arr[w]);
    }

    // 将元素交换
    Sort.prototype.exch = function(i, j) {
        let t = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = t;
    }

    // 打印
    Sort.prototype.show = function() {
        console.log(this.arr.join(','));
    }

    // 验证是否排序
    Sort.prototype.isSorted = function(newArr) {
       for (let i = 1; i < newArr.length; i++) {
           if (!this.less(i - 1, i)) {
               return false;
           }
       }

       return true;
    }

    // 选择排序
    Sort.prototype.xzSort = function() {
        for (let i = 0; i < this.arr.length; i++) {
            let s = i;
            for (let j = i + 1; j < this.arr.length; j++) {
                if (this.less(j, s)) {
                    s = j;
                }
            }

            this.exch(s, i);
        }
        return this.arr;
    }

    // 插入排序
    Sort.prototype.crSort = function() {
        const arr = this.arr;
        for (let i = 1; i < arr.length; i++) {
            for (let j = i; j > 0; j--) {
                if (this.less(j, j-1)) {
                    this.exch(j ,j-1);
                }
            } 
            // let j = i;
            // let o = j - 1;
            // while (j > 0 && o >= 0) {
            //     if (this.less(j, o)){
            //         this.exch(j, o);
            //         j = o;
            //         o = j - 1;
            //     }
            //     else {
            //         o--;
            //     }
            // }    
        }

        return arr;
    }

    // 希尔排序
    Sort.prototype.xrSort = function() {
        let n = this.arr.length;
        let h = 1;
        while (h < parseInt(n/3)) {
            h = 3 * h + 1;
        }

        while (h >=1) {
            for (let i = h; i < n; i++) {
                for (let j = i; j >= h && this.less(j, j - h); j -=h) {
                    this.exch(j, j-h);
                }

                h = parseInt(h/3);
            }
        } 

        return this.arr;
    }

    return Sort;
})();

module.exports = Sort;
