// https://leetcode.com/problems/decode-the-message/

const decodeMessage = (key, message) => {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    // make new arrray from chars in key
    key = Array.from(new Set(key.split(' ').join('')))
    let map = new Map()
    for(let i = 0; i < key.length; i++){
        map.set(key[i], alpha[i])
    }
    let decoded = ''
    for(let char of message){
        // either it's a char or a space
        // can't get a space from map, so || is used
        decoded+= map.get(char) || ' '
    }
    return decoded
};
