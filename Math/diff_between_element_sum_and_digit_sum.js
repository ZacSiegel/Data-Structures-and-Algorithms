// https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/description/

const differenceOfSum = (nums) => {
    let elementSum = 0;
    for(let num of nums) elementSum += num
    let digitSum = 0;
    nums.forEach(val => digitSum += addToSum(val))
    return Math.abs(elementSum - digitSum)
};

const addToSum = (num) => {
    let sum = 0;
    let digits = num.toString().split('')
    for(let digit of digits){
        sum += Number(digit)
    }
    return sum
}
