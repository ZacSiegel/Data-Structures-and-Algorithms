// https://leetcode.com/problems/search-a-2d-matrix/

const searchMatrix = (matrix, target) => {
    for(let i = 0; i < matrix.length; i++){
        let left = 0;
        let right = matrix[i].length - 1;
        if(target > matrix[i][right]) continue
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(matrix[i][mid] === target) return true
            if(target > matrix[i][mid]){
                left= mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return false
};
