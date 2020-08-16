/**
 * dfs 递归
 */
var rightSideView = function(root) {
    if (root === null) {
        return []
    }
    let deep = 0, result = [root];
    const f = (root, deep)=> {
        result[deep] = root.val;
        deep++;
        if (root.left) {
            f(root.left, deep)
        }
        if (root.right) {
            f(root.right, deep)
        }
    }
    f(root, deep)
    return result
};

/**
 * 广度遍历
 */
var rightSideView = function(root) {
    if (root === null) {
        return []
    }
    let result = [], arr = [root];
    while(arr.length){
        let len = arr.length;
        while(len) {
            const curObj = arr.shift();
            if (len === 1) {
                result.push(curObj.val)
            }
            if (curObj.left) { arr.push(curObj.left) };
            if (curObj.right) { arr.push(curObj.right)};
            len--
        }
    }
    return result
};