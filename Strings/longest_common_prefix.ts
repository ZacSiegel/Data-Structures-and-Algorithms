// https://leetcode.com/problems/longest-common-prefix/

function longestCommonPrefix(strs: string[]): string {
    let common: string = '';
    for(let i = 0; i < strs[0].length; i++){
        for(let currWord of strs){
            // if i gets to currWord length, currWord is a prefix
            // if there is a non-matching letter found, return common
            if(i === currWord.length || strs[0][i] !== currWord[i]){
                return common
            }
        }
        common += strs[0][i]
    }
    return common
};
