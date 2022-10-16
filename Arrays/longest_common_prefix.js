// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

const longestCommonPrefix = (strs) => {
    let common = ""
    for(let i = 0; i < strs[0].length; i++){
        for(let word of strs){
            if (i == word.length || word[i] != strs[0][i]){
                return common
            }
        }
        common += strs[0][i]  
    }
    return common    
};
