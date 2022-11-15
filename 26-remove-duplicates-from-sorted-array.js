
nums = [0,0,1,1,1,2,2,3,3,4]

var removeDuplicates = function(nums) {

    nums = nums.filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });

    return nums.length;





    // let j = nums.length;

    // for (i = 0; i < j; i++) {
    //     if (nums[i] === nums[i+1]) {
    //        nums.push(nums.pop(i+1)
    //     }
    // }

    // return nums.length;
};

console.log(removeDuplicates(nums));
console.log(nums);