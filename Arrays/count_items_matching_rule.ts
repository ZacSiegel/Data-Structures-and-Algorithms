// https://leetcode.com/problems/count-items-matching-a-rule/

function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    let ruleMap = {
        'type': 0,
        'color': 1,
        'name': 2
    }
    let ruleIdx: number = ruleMap[ruleKey];
    let count: number = 0;
    for(let item of items){
        if(item[ruleIdx] === ruleValue) count++
    }
    return count;
};
