// https://leetcode.com/problems/3sum/

const threeSum = (nums) => {
    nums = nums.sort((a, b) => a - b);

    let result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        // making sure not to use same start value twice
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            let threeSum = nums[i] + nums[left] + nums[right];
            if (threeSum < 0) {
                left++;
            } else if (threeSum > 0) {
                right--;
            } else {
                // add nums to result
                result.push([nums[i], nums[left], nums[right]]);
                // move left pointer up
                left++;
                // if left pointer lands on dupe, move it up until it doesn't
                while (nums[left] === nums[left - 1] && left < right) {
                    left++;
                }
            }

        }

    }
    return result
};
