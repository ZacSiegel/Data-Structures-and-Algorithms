// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/description/

const countNegatives = (matrix) => {
    let count = 0;
    for(let row of matrix){
        let right = row.length - 1
        while(row[right] < 0){
            count++;
            right--;
        }
    }
    return count;
};
