// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

const removeDuplicates = (str) => {
    let stack = [];
    for(let i = 0; i < str.length; i++){
        let stackTop = stack[stack.length-1]; 
        if(str[i] !== stackTop) {
            stack.push(str[i]);
        } else {
            stack.pop();
        }
    }
    return stack.join('');
};
