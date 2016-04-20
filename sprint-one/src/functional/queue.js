var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var front = 0;
  var current = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[current] = value;
    current++;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[front];
    delete storage[front];
    front < current ? front++ : front;
    return dequeued;
  };

  someInstance.size = function() {
    return Math.max(0, current - front);
  };

  return someInstance;
};
