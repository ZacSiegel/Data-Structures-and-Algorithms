// refactor using two hash maps and comparing values

function isIsomorphic(s: string, t: string): boolean {
    let mapST = new Map()
    let mapTS = new Map()
    for(let i = 0; i < s.length; i++){
        let sChar: string = s[i]
        let tChar: string = t[i]
        if(mapST.has(sChar) && mapST.get(sChar) !== tChar || mapTS.has(tChar) && mapTS.get(tChar) !== sChar) return false
        mapTS.set(tChar, sChar);
        mapST.set(sChar, tChar);
    }
    return true
};
