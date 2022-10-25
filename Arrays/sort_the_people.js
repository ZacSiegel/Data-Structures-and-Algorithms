// https://leetcode.com/problems/sort-the-people/

const sortPeople = (names, heights) => {
    let map = new Map();
    // map each person to respective height
    for(let i = 0; i < heights.length; i++){
        map.set(heights[i], names[i]);
    }
    // sort heights array
    heights.sort((a,b) => b-a);    
    let result = [];
    // check heights against values of map
    // and push them into results array
    for(let height of heights){
        result.push(map.get(height));
    }
    return result;
};
