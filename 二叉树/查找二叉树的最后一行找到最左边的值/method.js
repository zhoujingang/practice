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
 var findBottomLeftValue = function(root) {
    let arr = [], deep = 0;
    arr[0] = root.val
    const f = (root, deep) => {
       arr[deep++] = root.val;
       if (root.right) {
           f(root.right, deep)
       } 
       if (root.left) {
           f(root.left, deep)
       } 
       
       
    }
    f(root, deep)
    return arr.pop()
};
const root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4
        }
    },
    right: {
        val: 3,
        left: {
            val: 5,
            left: {
                val :7
            }
        },
        right: {
            val: 6
        }
    }
}
console.log(findBottomLeftValueDFS(root))