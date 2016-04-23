

// ------------------------
// Instantiate a new graph
var Graph = function() {
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode.value = node;
  this[node] = newNode;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this[node] !== undefined; 
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var flag = false;
  if (this[toNode].link === undefined || this[fromNode].link === undefined) {
    return flag;
  }
  var fromTo = this[fromNode].link[toNode] === this[toNode].value;
  var toFrom = this[toNode].link[fromNode] === this[fromNode].value;
  //check the linkage between fromNode and toNode
  if (fromTo && toFrom) {
    flag = true;
  }
  return flag;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].link = this[fromNode].link || {};
  this[fromNode].link[toNode] = toNode;
  this[toNode].link = this[toNode].link || {};
  this[toNode].link[fromNode] = fromNode;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this[fromNode].link[toNode];
  delete this[toNode].link[fromNode];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this, function(node) {
    cb(node.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//  Our Graphs have constant time lookup because they are built from objects (which has constant time lookup)
// .addNode - constant time
// .contains - constant time
// .removeNode - constant time
// .hasEdge - constant time
// .addEdge - constant time
// .removeEdge - constant time
// .forEachNode - at least linear time