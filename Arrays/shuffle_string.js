// https://leetcode.com/problems/shuffle-string/

const restoreString = (s, indices) => {
    const result = [];
    for(let i = 0; i < s.length; i++) {
        // adds at result index from indices values
        result[indices[i]] = s[i]
    }
    return result.join('');
};
