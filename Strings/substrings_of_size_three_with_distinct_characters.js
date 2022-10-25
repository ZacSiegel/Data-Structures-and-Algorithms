// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/

const countGoodSubstrings = (s) => {
    let result = 0
    for(let i = 0; i < s.length - 2; i++){
        let window = s.slice(i, i + 3)
        let chars = new Set(window)
        if (chars.size === 3) result ++
    }
    return result
};
