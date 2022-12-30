// https://leetcode.com/problems/fruit-into-baskets/description/

const totalFruit = (fruits) => {
    const map = new Map();
    let left = 0; 
    let maxLen = 0;
    let right = 0;
    while(right < fruits.length){
        const rightFruit = fruits[right];
        map.set(rightFruit, map.get(rightFruit) + 1 || 0);
        
        //  once there are two fruits in map
        while (map.size > 2) {
            const leftFruit = fruits[left];
            if (map.get(leftFruit) === 0) {
                map.delete(leftFruit);
            } else {
                map.set(leftFruit, map.get(leftFruit) - 1);
            }
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
        right++;
    }
    return maxLen;
};
