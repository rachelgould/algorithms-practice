// Solution 1:
function findClosestValueInBst(tree, target) {
  let bstNodes = [];
  // Check if left and right are BST
  function checkLeft(current, next) {
    console.log("-------------Checking left on :", current)
    console.log("Next is :", current)
    next === null ? true : 
                          (current.value > next.value) && checkChildren(current)
                          console.log("done-----------")
  }
  function checkRight(current, next) {
    console.log("-------------Checking right on :", current)
    console.log("Next is :", current)
    next === null ? true : 
                           (current.value <= next.value) && checkChildren(current)
                           console.log("done-----------")
  }
  function checkChildren(current) {
    console.log("-----------Checking Children---------")
    if (checkLeft(current.left) && checkRight(current.right)) {
      bstNodes.push(current.value);
      console.log("Pushed new value to bst nodes list")
      console.log("BST NODES:::: ", bstNodes)
      return true;
    } else {
      return false;
    }
  }
  function checkBst(node) {
    checkChildren(node)
    console.log("Done in original function")
    console.log("BST NODES:::: ", bstNodes)
  }

  checkBst(tree);
}
