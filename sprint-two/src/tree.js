var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = {};
  newTree.counter = 0;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = {};
  child.value = value;
  child.children = {};
  _.extend(child, treeMethods);
  this.children[this.counter] = child;
  this.counter++;
};

treeMethods.contains = function(target) {
  return this.children[this.counter - 1].value === target;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
