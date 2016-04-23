var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this[item] = item;
};

setPrototype.contains = function(item) {
  return this[item] === item;
};

setPrototype.remove = function(item) {
  delete this[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// This set (being implemented) have constant time lookup because they are objects (objects have constant time lookup)
// .add - constant time
// .contains - constant time
// .remove - constant time