//Implemented with Objects
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

//Implemented with Arrays
var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  var flag = false;
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      flag = true;
    }
  }
  return flag;
};

setPrototype.remove = function(item) {
  // _.each(this._storage, function(value, index) {
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      // return function () {
      delete this._storage[i];
      // };
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// This set data structure was implemented with the array data structure so:
// .add - constant time
// .contains - linear time
// .remove - linear time
