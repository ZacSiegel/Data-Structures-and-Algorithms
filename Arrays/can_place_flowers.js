// https://leetcode.com/problems/can-place-flowers/

const canPlaceFlowers = (flowerbed, n) => {
    for(let i = 0; i < flowerbed.length; i++){
        let prev = flowerbed[i - 1];
        let curr = flowerbed[i];
        let next = flowerbed[i + 1];
        if(!prev && !curr && !next){
            flowerbed[i] = 1;
            n--;
        }
    }
    return n <= 0;
};
