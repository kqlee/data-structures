var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = {}; // fix me
  newTree.counter = 0;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = {};
  _.extend(child, treeMethods);
  child.counter = 0;
  child.children = {};

  this.children[this.counter] = child;
  this.children[this.counter].value = value;
  this.counter++;
};

treeMethods.contains = function(target) {
  var flag = false;

  if (!flag) {
    for (var i = 0; i < this.counter; i++) {
      // console.log('children:' + this.children[i].value);
      if (this.children[i].value === target) {
        flag = true;
        // console.log('children: ' + this.children[i].value + ', flag =' + flag);
        return flag;
      } 
      if (!flag) {
        flag = this.children[i].contains(target);
      }
    }
  }
  
  return flag;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
