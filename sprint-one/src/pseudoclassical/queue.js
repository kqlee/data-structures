var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.front = 0;
  this.end = 0;
};

Queue.prototype.size = function() {
  return this.end - this.front;
};

Queue.prototype.enqueue = function(value) {
  this[this.end] = value;
  this.end++;
};

Queue.prototype.dequeue = function() {
  var dequeued = this[this.front];
  delete this[this.front];
  this.front < this.end ? this.front++ : this.front;
  return dequeued;
};