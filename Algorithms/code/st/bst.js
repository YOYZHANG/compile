// 二叉查找树
var Node = (function() {
    function Node(key, val, n) {
        this.key = key;
        this.val = val;
        this.n = n;
        this.left = null;
        this.right = null;
    }

    return Node;
})();



var BST = (function() {
    function BST() {
        this.root = null;
        this.arr = [];
    }

    // print
    BST.prototype.print = function() {
        this.printNode(this.root);
        // return JSON.stringify(this.arr, null, 2);
        return this.arr;
    }

    BST.prototype.printNode = function(node) {
        if (node == null) {
            return;
        }

        if (node.left) {
            this.printNode(node.left);
        }
        this.arr.push(node.key);

        if (node.right) {
            this.printNode(node.right);
        }
    }

    // 将键值存入表中
    BST.prototype.put = function(key, val) {
        // 查找key, 找到更新他的值，否则为他创建一个新的节点
        this.root = this.putNode(this.root, key, val);
    }

    BST.prototype.putNode = function(node, key, val) {
        if (node == null) {
            return new Node(key, val, 1);
        }

        let cmp = key - node.key;

        if (cmp < 0) {
            node.left = this.putNode(node.left, key, val);
        }
        else if (cmp > 0) {
            node.right = this.putNode(node.right, key, val);
        }
        else {
            node.val = val;
        }

        node.n = this.nodeSize(node.left) + this.nodeSize(node.right) + 1;

        return node;
    }

    // 获取键值对应的 key
    BST.prototype.get = function(key) {
        return this.getNode(this.root, key);
    }

    // 获取键值对应的 key
    BST.prototype.getNode = function(node, key) {
        // 在以 x 为根结点的子树中查找并返回 key 所对应的值
        // 如果找不到则返回 null
        if (node == null) {
            return null;
        }

        const cmp = key - node.key;
        
        if (cmp < 0) {
            return this.getNode(node.left, key);
        }
        else if (cmp > 0) {
            return this.getNode(node.right, key);
        }
        else {
            return node.val;
        }
    }

    // 键值对的数量
    BST.prototype.size = function() {
       return this.nodeSize(this.root);
    }

    BST.prototype.nodeSize = function(node) {
       if (node == null) {
           return 0;
       }

       return +node.n;
    }

    // 表中所有键的集合
    BST.prototype.keys = function(i, j) {
       
    }

    // 最小的键
    BST.prototype.min = function() {
        return this.minNode(this.root).key;
    }

    BST.prototype.minNode = function(node) {
        if (node.left == null) {
            return node;
        }

        return this.minNode(node.left);
    }

    // 最大的键
    BST.prototype.max = function() {
        return this.maxNode(this.root).key;
    }

    // 最大的键
    BST.prototype.maxNode = function(node) {
        if (node.right == null) {
            return node;
        }

        return this.maxNode(node.right);
    }


     // 选择
     BST.prototype.select = function(k) {
        return this.selectNode(this.root, k).key;
    }

    // 选择 node
    BST.prototype.selectNode = function(node, k) {
        if (node == null) {
            return null;
        }
        let t = this.size(node.left);

        if (t > k) {
            return this.selectNode(node.left, t);
        }
        else if (t < k) {
            return this.selectNode(node.right, k-t-1);
        }
        else {
            return node;
        }
    }

    // 小于等于 key 的最大键
    BST.prototype.floor = function(key) {
        let x = this.floorNode(this.root, key);
        if (x == null) {
            return null;
        }
        else {
            return x.key;
        }
    }

    // 小于等于 key 的最大键
    BST.prototype.floorNode = function(node, key) {
       // 如果给定的键 key 小于二叉查找树的根结点的键，那么小于等于 key 的最大键
       // 那么小于 key 的最大键一定在根节点的左子树中
       // 如果给定的键大于根节点， 那么只有当根节点右子树中存在小于等于 key 的结点时，小于等于 key 的最大值
       if (node == null) {
           return null;
       }

       let cmp = key - node.key;
       if (cmp === 0) {
           return node;
       }
       if (cmp < 0) {
            return this.floor(node.left, key);
       }
       let t = this.floor(node.right, key);

       if (t != null) {
           return t;
       }
       else {
           return node;
       }
    }

    // 找到排名为 k 的键
    BST.prototype.rank = function(key) {
        return this.rankNode(key, this.root);
    }

    // 找到排名为 k 的键
    BST.prototype.rankNode = function(key, node) {
        // 返回以 node 为跟节点的子树中，小于 node.key 的键的数量
        if (node == null) {
            return 0;
        }

        let cmp = key - node.key;
        if (cmp < 0) {
            return this.rankNode(key, node.left);
        }
        else if (cmp > 0) {
            return 1 + this.size(node.left) + this.rank(key, node.right);
        }
        else {
            return this.size(node.left);
        }
    }

    BST.prototype.delete = function(key) {
        return this.deleteNode(key, this.root);
    }

    // 删除键
    BST.prototype.deleteNode = function(key, node) {
        if (node == null) {
            return;
        }

        let cmp = key - node.key;
        if (cmp < 0) {
            node.left = ths.deleteNode(key, node.left);
        }
        else if (cmp > 0) {
            node.right = this.deleteNode(key, node.right);
        }
        else {
            if (node.right == null) {
                return node.left;
            }

            if (node.left == null) {
                return node.right;
            }

            let t = node;
            node = this.minNode(t.right);
            node.right = this.deleteMinNode(t.right);
            node.left = t.left;
        }
        node.n = this.nodeSize(node.left) + this.nodeSize(node.right) + 1;
        return node;
    }

    // 删除最大键
    BST.prototype.deleteMax = function(key) {
        
    }

    // 删除最小键
    BST.prototype.deleteMinNode = function(node) {
        // 需不断深入左子树，直到遇见一个空链接，然后将指向改节点的链接指向该节点的
        if (node.left == null) {
            return node.right;
        }
        
        node.left = this.deleteMinNode(node.left);
        node.n = this.size(node.left) + this.size(node.right) + 1;
        return node;
    }

    BST.prototype.deleteMin = function() {
       return this.deleteMinNode(this.root)
    }

    return BST;
})();

module.exports = BST;
