// https://leetcode.com/problems/valid-parentheses/

const isValid = (s) => {
    let stack = []
    let closeToOpen = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for(let i = 0; i < s.length; i++){
        let bracket = s[i]
        
        // checking key in closeToOpen
        // if it's an opening bracket
        if(bracket in closeToOpen){
            // if the stack is not empty and the last stack element === the closing bracket
            // we remove it from the stack
            if(stack && stack[stack.length -1] === closeToOpen[bracket]){
                stack.pop()
            // if there isn't a matching closing bracket, then it's not valid
            } else {
                return false
            }
        } else {
            stack.push(bracket)
        }
    }
    return !stack.length ? true : false
};
