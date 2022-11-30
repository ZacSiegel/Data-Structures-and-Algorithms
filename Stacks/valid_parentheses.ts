// https://leetcode.com/problems/valid-parentheses/

function isValid(s: string): boolean {
    let closeToOpen = {']': '[', '}': '{', ')': '('};
    let stack: Array<string>= [];
    for(let i = 0; i < s.length; i++){
        let stackTop: string = stack[stack.length - 1];
        if(s[i] in closeToOpen && stackTop === closeToOpen[s[i]]){
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    return stack.length === 0 ? true : false
};
