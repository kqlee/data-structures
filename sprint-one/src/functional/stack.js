var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[length] = value;
    length++;
  };

  someInstance.pop = function() {
    var temp = storage[length - 1];
    delete storage[length - 1];
    length >= 0 ? length-- : length = 0;
    return temp;
  };

  someInstance.size = function() {
    return length >= 0 ? length : 0;
  };

  return someInstance;
};
