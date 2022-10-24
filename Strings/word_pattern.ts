// https://leetcode.com/problems/word-pattern/

function wordPattern(pattern: string, s: string): boolean {
    let mapPS = new Map()
    let mapSP = new Map()
    let str = s.split(' ')
    if(pattern.length !== str.length) return false
    for(let i = 0; i < pattern.length; i++){
        if(mapPS.has(pattern[i]) && mapPS.get(pattern[i]) !== str[i] || mapSP.has(str[i]) && mapSP.get(str[i]) !== pattern[i] ){
            return false
        }
        mapPS.set(pattern[i], str[i])
        mapSP.set(str[i], pattern[i])
    }
    return true
};
