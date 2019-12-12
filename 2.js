// Solution 1:
function findClosestValueInBst(tree, target) {
  let closest = tree.value;
  function checkNode(node) {
    if (!node) return;
    if (node.value === target) {
      closest = node.value;
    } else if (node.value > target) {
      checkIsCloser(node)
      checkNode(node.left)
    } else {
      checkIsCloser(node)
      checkNode(node.right)
    }
    function checkIsCloser(node) {
      if (Math.abs(target - node.value) < Math.abs(target - closest)) {
        closest = node.value;
      }
    }
  }
  checkNode(tree);
  return closest;
}

// Solving iteratively will use less memory in this case...
// Solution 2:
function findClosestValueInBst(tree, target) {
  function checkIsCloser(node) {
    if (Math.abs(target - node.value) < Math.abs(target - closest)) {
      closest = node.value;
    }
  }
  let closest = tree.value;
  let currentNode = tree;
  while (currentNode) {
    checkIsCloser(currentNode);
    if (closest === target) {
      break;
    } else if (currentNode.value > target) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }
  return closest;
}