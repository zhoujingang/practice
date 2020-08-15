var levelOrder = function(root) {
    if(root === null) {
        return []
    }
    let result = [], arr = [];
    arr.push(root);
    while(arr.length) {
        const popObj = arr.shift();
        result.push(popObj.val);
        if (popObj.left) { arr.push(popObj.left) }
        if (popObj.right) { arr.push(popObj.right) }
        
    }
    return result
};
