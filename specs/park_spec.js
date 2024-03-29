const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park

  beforeEach(function() {
    park = new Park('Jurassic Park', '£100')
    dinosaur = new Dinosaur()
  })

  it('should have a name', function() {
    const actual = park.name
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function() {
    const actual = park.price
    assert.strictEqual(actual, '£100')
  });

  it('should have a collection of dinosaurs', function() {
    const actual = dinosaur.species
    assert.deepStrictEqual(actual, dinosaur.species)
  });

  it('should be able to add a dinosaur to its collection', function() {
    const actual = park.dinoCollection
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to remove a dinosaur from its collection', function() {
    const actual = park.dinoCollection
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
