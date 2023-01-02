// https://leetcode.com/problems/sign-of-the-product-of-an-array/description/

const arraySign = (nums) => {
    let product = 1;
    for(let num of nums) product *= num
    if(product > 0) return 1
    else if (product < 0) return -1
    else return 0
};
