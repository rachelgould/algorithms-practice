// Solution 1: 
function twoNumberSum(array, targetSum) {
	for (let i in array) {
		let checkedPairs = [];
		checkedPairs.push(array[i]);
		for (let n in array) {
			if (i !== n) {
				if (array[i] + array[n] === targetSum) {
					checkedPairs.push(array[n]);
					return checkedPairs;
				}
				if (n === array.length-1) {
					array.splice(i,1);
				}
			}
		}
	}
	return [];
}

// Solution 2:
function twoNumberSum(array, targetSum) {
  const nums = {};
	for (let n of array) {
    let diff = targetSum - n;
    if (diff in nums) {
      return [diff, n];
    } else {
      nums[n] = 1;
    }
	}
	return [];
}

// Solution 3:
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length-1;
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === targetSum) {
      return [array[left], array[right]];
    } else if (sum < targetSum) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}