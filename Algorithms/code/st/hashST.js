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

    return ST;
})();

module.exports = ST;
