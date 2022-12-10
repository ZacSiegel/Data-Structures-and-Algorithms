// https://leetcode.com/problems/sorting-the-sentence/description/

function sortSentence(s: string): string {
    let strs: string[] = s.split(' ');
    let map = new Map();
    for(let str of strs){
        let index: number = parseInt(str[str.length - 1]);
        let word: string = str.slice(0, str.length - 1);
        map.set(index, word);
    }
    // sort by num at end of string
    let sortedMap = new Map([...map.entries()].sort());
    let output: string[] = []
    for(let [i, word] of sortedMap){
        output.push(word);
    };
    return output.join(' ');
};
