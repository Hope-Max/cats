const chai = require('chai');
const assert = chai.assert;
const breedDetails = require('../syncBreeds');

describe('#breedDetails', function() {
  it('should returns breed details for the Bombay breed', function() {
    const expectedDesc = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
    const bombay = breedDetails('Bombay');
    assert.strictEqual(bombay, expectedDesc);
  });
  it('should returns breed details for the Balinese breed', function() {
    const expectedDesc = "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.";
    const balinese = breedDetails('Balinese');
    assert.strictEqual(balinese, expectedDesc);
  });
  it('should returns undefined for the Ragdoll breed', function() {
    const ragdoll = breedDetails('Ragdoll');
    assert.isUndefined(ragdoll);
  });
});