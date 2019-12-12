// Solution 1:
function findClosestValueInBst(tree, target) {
  let closest = tree.value;
  function checkNode(node) {
    if (Math.abs(target - node.value) < Math.abs(target - closest)) {
      closest = node.value
    }
    if (node.left) {
      checkNode(node.left);
    }
    if (node.right) {
      checkNode(node.right);
    }
  }
  checkNode(tree);
  return closest;
}

// Solution 2:
function findClosestValueInBst(tree, target) {
  let closest = tree.value;
  function checkNode(node) {
    function checkIsCloser(node) {
      if (Math.abs(target - node.value) < Math.abs(target - closest)) {
        closest = node.value;
      }
    }
    if (node.value === target) {
      closest = node.value;
    } else if (node.value > target) {
      checkIsCloser(node)
      if (node.left) {
        checkNode(node.left)
      }
    } else {
      checkIsCloser(node)
      if (node.right) {
        checkNode(node.right)
      }
    }
  }
  checkNode(tree);
  return closest;
}
