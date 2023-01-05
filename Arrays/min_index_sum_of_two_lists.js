// https://leetcode.com/problems/minimum-index-sum-of-two-lists/description/

const findRestaurant = (list1, list2) => {
    let map = new Map();
    for (let i = 0; i < list1.length; i++) map.set(list1[i], i);
  
    let min = Infinity;
    let res = [];
    let total;
  
    for (let j = 0; j < list2.length; j++) {
        if (map.has(list2[j])) {
            total = j + map.get(list2[j]);
            if (total < min) {
                res = [];
                res.push(list2[j]);
                min = total;
            } else if (total == min) {
                res.push(list2[j]);
            }
        }
    }
    return res;
};
