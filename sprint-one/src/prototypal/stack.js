var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.length = 0;
  return obj;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.length;
};

stackMethods.push = function(value) {
  this[this.length] = value;
  this.length++;
};

stackMethods.pop = function() {
  var temp = this[this.length - 1];
  delete this[this.length - 1];
  this.length > 0 ? this.length-- : this.length = 0;
  return temp;
};