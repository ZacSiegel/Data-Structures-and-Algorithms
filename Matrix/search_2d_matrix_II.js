
// https://leetcode.com/problems/search-a-2d-matrix-ii/description/

const searchMatrix = (matrix, target) => {
  
    for(let row of matrix){
        let left = 0;
        let right = row.length - 1;

        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(row[mid] === target) return true
            if(target <= row[mid] && target >= row[left]){
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return false;
};
