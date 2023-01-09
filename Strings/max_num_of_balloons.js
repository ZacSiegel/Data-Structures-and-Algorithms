// https://leetcode.com/problems/maximum-number-of-balloons/description/

const maxNumberOfBalloons = (text) => {
    let map = {
        'b': 0,
        'a': 0,
        'l': 0,
        'o': 0,
        'n': 0
    }

    for (const c of text) if (c in map) map[c]++

    const res = [map['b'], map['a'], map['l'] / 2, map['o'] / 2, map['n']]
    return Math.floor(Math.min(...res))
};
