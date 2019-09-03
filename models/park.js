const Park = function(name, price) {
  this.name = name;
  this.price = price;
  this.dinoCollection = [];
};

Park.prototype.addDino = function (newDino) {
  this.dinoCollection.push(newDino);
};

Park.prototype.killDino = function (killDino) {
  this.dinoCollection.pop([]);
};

module.exports = Park;
