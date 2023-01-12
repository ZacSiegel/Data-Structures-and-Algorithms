// https://leetcode.com/problems/merge-similar-items/description/

const mergeSimilarItems = (items1, items2) => {
    let merged = [];
    let map = new Map();
    for(let item of items1){
        map.set(item[0], item[1])
    }

    for(let item of items2){
        if(map.has(item[0])){
            map.set(item[0], (map.get(item[0]) + item[1]))
        } else {
            map.set(item[0], item[1])
        }
    }

    for(let [val, weight] of map){
        let arr = [val, weight]
        merged.push(arr)
    }

    return merged.sort((a, b) => a[0] - b[0])
};
