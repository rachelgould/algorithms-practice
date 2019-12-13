function branchSums(root) {
  let sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
  
  function calculateBranchSums(node, currentSum, sums) {
    if (!node) {
      return;
    }
    let newCurrentSum = currentSum + node.value;
    if (!node.left && !node.right) {
      sums.push(newCurrentSum);
      return;
    }
    calculateBranchSums(node.left, newCurrentSum, sums);
    calculateBranchSums(node.right, newCurrentSum, sums);
  }
}