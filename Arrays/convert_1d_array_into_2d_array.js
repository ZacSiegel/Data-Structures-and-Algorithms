// https://leetcode.com/problems/convert-1d-array-into-2d-array/

const construct2DArray = (original, m, n) => {
    let output = []
    if(n * m !== original.length) return output
    let subArr = []
    for(let i = 0; i < original.length; i++){
        subArr.push(original[i])
        if(subArr.length === n){
            output.push(subArr)
            subArr = []
        }
    }
    return output;
};
