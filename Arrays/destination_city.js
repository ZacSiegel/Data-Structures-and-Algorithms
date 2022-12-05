// https://leetcode.com/problems/destination-city/

const destCity = (paths) => {
    const map = new Map();
    for(let path of paths){
        let start = path[0];
        let end = path[1];
        // setting paths
        map.set(start, end)
        // add next end point if it exists
        // if there is no destination already in the map, then set to null
        map.set(end, (map.get(end) || null))
    }
    for(let path of map){
        if(path[1] === null) {
            return path[0]
        }
    }
};
