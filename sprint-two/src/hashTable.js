

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  this._storage.set(index, []);
  var currentBucket = this._storage.get(index);
  currentBucket.push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(index);
  for (var i = 0; i < currentBucket.length; i++) {
    if (currentBucket[i][0] === k) {
      return currentBucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currBucket = this._storage.get(index);
  for (var i = 0; i < currBucket.length; i++) {
    if (currBucket[i][0] === k) {
      currBucket[i][1] = undefined;
    }
  }
  // this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


