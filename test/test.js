'use strict';

const expect = require('chai').expect;
const uniSort = require('../index');

// Test for Arabic
describe('#unisort', () => {
  it('should put ا after a and ط after d', () => {
    const result = uniSort(['A','B','ط','D','ا']);
    expect(result).to.eql(['A','ا','B','D','ط']);
  });
});
