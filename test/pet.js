if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
  }
  
  describe("pet.js", function () {
    describe("pet()", function () {
        it("returns a random pet", function () {
            sinon.stub(faker.pet, 'pet').returns('cat');
            var pet = faker.pet.pet();
  
            assert.equal(pet, 'cat ');
            faker.pet.pet.restore();
        });
    });
  
   
  
    describe("type()", function () {
      it("returns random pet type", function () {
        sinon.stub(faker.pet, 'type').returns('hybrid');
            var type = faker.pet.type();
  
            assert.equal(type, 'hybrid');
            faker.pet.type.restore();
        });
    });
 
  
    describe("color()", function () {
        it("returns a random color", function () {
            sinon.stub(faker.pet, 'color').returns('black');
            var color = faker.pet.color();
  
            assert.equal(color, 'black');
            faker.pet.color.restore();
        });
    });
  });
  