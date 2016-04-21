var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.front = 0;
  newQueue.current = 0;
  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.current - this.front;
};

queueMethods.enqueue = function(value) {
  this[this.current] = value;
  this.current++;
};

queueMethods.dequeue = function() {
  var dequeued = this[this.front];
  delete this[this.front];
  this.front < this.current ? this.front++ : this.front;
  return dequeued;
};
