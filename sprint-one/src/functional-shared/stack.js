var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.length = 0;
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.length;
};

stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

stackMethods.pop = function() {
  var popped = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length > 0 ? this.length-- : this.length = 0;
  return popped;
};