// https://leetcode.com/problems/spiral-matrix/description/

const spiralOrder = (matrix) => {
    let result = []
    
    let top = 0;
    let left = 0;
    let bottom = matrix.length - 1;
    let right = matrix[0].length - 1;

    // size here is dimensions of matrix (# of cells)
    const size = matrix.length * matrix[0].length

    while (result.length < size) {
        //  get every i in top row
        // (i <= right because we're using indices here)
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i])
        }

        // shifting top to next row
        top++;

        // get every i in right column
        for (let i = top; i <= bottom ; i++) {
            // matrix[i] is the row
            result.push(matrix[i][right])
        }

        // decrement right becuase we want to shift it to left
        // this means that we completed one column
        right--;

        // get every i in bottom row
        for (let i = right; i >= left && result.length < size; i--) {
            result.push(matrix[bottom][i])
        }

        // move bottom boundary up
        bottom--;


        // get every i in left column
        for (let i = bottom; i >= top && result.length < size; i--) {
            result.push(matrix[i][left])
        }
        left++;
    }
    return result
};
