var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  _.extend(obj, queueMethods);
  obj.end = 0;
  obj.front = 0;
  return obj;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.end - this.front;
};

queueMethods.enqueue = function(value) {
  this[this.end] = value;
  this.end++;
};

queueMethods.dequeue = function() {
  var temp = this[this.front];
  delete this[this.front];
  this.front < this.end ? this.front++ : this.front;
  return temp;
};
