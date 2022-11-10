// https://leetcode.com/problems/goal-parser-interpretation/

const interpret = (command) => {
    let result = ''
    for(let i = 0; i < command.length; i++){
        if(command[i] === '(' && command[i+1] === ')'){
            result += 'o'
        } else if (command[i] === '(' || command[i] === ')') {
            continue
        } else {
            result += command[i]
        }
    }
    return result
};
