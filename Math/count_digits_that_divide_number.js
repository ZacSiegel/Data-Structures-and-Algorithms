// https://leetcode.com/problems/count-the-digits-that-divide-a-number/

const countDigits = (num) => {
    let count = 0;
    const nums = num.toString().split('')
    for(let i = 0; i < nums.length; i++){
        if(num % Number(nums[i]) === 0){
            count++;
        } 
    }
    return count
};
