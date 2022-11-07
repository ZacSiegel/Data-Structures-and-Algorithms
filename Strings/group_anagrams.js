// https://leetcode.com/problems/group-anagrams/

const groupAnagrams = (strs) => {
    let map = {};
    for (let str of strs) {
        // using sorted letters as key in map
        // when a word is sorted, it should match anagram words 
        // and can be pushed into that key's array
        let letters = str.split("").sort().join("");
        // if there is a key with the sorted letters for a given word
        // then we can push that word into that key's array
        // otherwise, we create an array to be used as a value in a key:value
        // pair where the sorted letters are the key and the array contains
        // the actual words that are anagrams
        map[letters] ? map[letters].push(str) : map[letters] = [str];
    }
    return Object.values(map);
};
