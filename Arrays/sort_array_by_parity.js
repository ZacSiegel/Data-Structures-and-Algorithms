// https://leetcode.com/problems/sort-array-by-parity/description/

const sortArrayByParity = (nums) => {
    const output = [];
    for(let num of nums) {
        if(num % 2 === 0){
            output.unshift(num)
        } else {
            output.push(num)
        }
    }
    
    return output;
};
