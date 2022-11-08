// https://leetcode.com/problems/make-the-string-great/

const makeGood = (s) => {
    let stack = ['']
    for(let char of s){
        let stackTop = stack[stack.length-1];
        stack.push(char)
        if(stack.length > 1){            
            if(stackTop !== char && stackTop.toLowerCase() === char.toLowerCase()){
                stack.pop()
                stack.pop()
            }
        }
    }
    return stack.join('')
};
