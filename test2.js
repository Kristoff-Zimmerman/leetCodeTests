let nums = [10,100,53,2,5,20,16,7];
let target = 27;

var twoSum = function(nums, target) {
    let answer = [];

    
    for (let i = 0; i < nums.length; i++) {
        let tempTarget = target - nums[i];
        let tempNums = nums;
        delete tempNums[i];
        
        for (let j = 0; j < tempNums.length; j++) {
            if (tempNums[j] == tempTarget) {
                answer.push(j);
                answer.push(i);
            };
        };
    };
  return answer;
};

console.log(twoSum(nums, target));