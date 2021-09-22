// 符号表
var ST = (function() {
    function ST(max) {
        this.m = max;
    }

    // 将键值存入表中
    ST.prototype.put = function(v) {
        
    }

    // 获取键值对应的 key
    ST.prototype.get = function() {}

    // 从表中删除 key
    ST.prototype.delete = function() {
        this.put(key, null);
    }

    // 键 key 在表中是否有对应的值
    ST.prototype.contains = function() {
        return this.get(key) != null;
    }

    // 是否为空
    ST.prototype.isEmpty = function(v, w) {
        return this.size() == 0;
    }

    // 键值对的数量
    ST.prototype.size = function(i, j) {
       
    }

    // 表中所有键的集合
    ST.prototype.keys = function(i, j) {
       
    }

    // 最小的键
    ST.prototype.min = function(v, w) {
        return this.size() == 0;
    }

    // 最大的键
    ST.prototype.max = function(i, j) {
       
    }

    // 小于等于 key 的最大键
    ST.prototype.floor = function(i, j) {
       
    }

    // 大于等于 key 的最小值
    ST.prototype.celling = function(v, w) {
        return this.size() == 0;
    }

    // 小于 key 键的数量
    ST.prototype.rank = function(i, j) {
        
    }

    // 删除最小的键
    ST.prototype.deletemin = function(i, j) {
        this.delete(this.min())
    }

    // 删除最大的键
    ST.prototype.deletemax = function(v, w) {
        this.delete(this.max());
    }

    // 【i，j】间的数量
    ST.prototype.size = function(lo, hi) {
       if (this.map[lo] < this.map[hi]) {
           return 0;
       }
       else if (this.contains(hi)) {
           return this.rank(h1) -this.rank(lo) + 1;
       }
       else {
           return this.rank(hi) - this.rank(lo);
       }

    }

    // [i, j]间的 key
    ST.prototype.keys = function() {
        return this.keys(this.min(), this.max());
    }

    return ST;
})();

module.exports = ST;
