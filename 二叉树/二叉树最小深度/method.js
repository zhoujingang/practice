/**
 * 广度遍历 bfs
 */
var findBottomLeftValueBFS = function(root) {
    let arr = [root], queue = [];
    while(arr.length) {
        const current = arr.shift();
        queue.push(current.val);
        current.right && arr.push(current.right);
        current.left && arr.push(current.left);
    }
    return queue.pop()
};
 /**
  * 深度遍历 dfs
  */
 var minDepth = function(root) {
    if (root === null) {
        return 0
    }
    let arr = [], deep = 0;
    const f = (root, deep) => {
        deep++;
        if (!root.left && !root.right) {
            arr.push(deep)
        }
        if (root.left) {
            f(root.left,  deep)
        }
        if (root.right) {
            f(root.right, deep)
        }
    }
    f(root, deep)
    return Math.min(...[1,2])
};

const root = {
    val: 3,
    left: {
        val: 9,
    
    },
    right: {
        val: 20,
        left: {
            val: 15,
        
        },
        right: {
            val: 7
        }
    }
}
console.log(minDepth(root))