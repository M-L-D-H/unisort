const { expect } = require('chai');
const uniSort = require('../index');

// Test for Arabic
describe('#unisort', () => {
  it('should put ا after a and ط after d', () => {
    const result = uniSort([
      'A',
      'B',
      'ط',
      'D',
      'ا',
    ]);
    expect(result).to.eql([
      'A',
      'ا',
      'B',
      'D',
      'ط',
    ]);
  });

  it('should put أَحْمَدٌ before Alfred and طارق after Doe', () => {
    const result = uniSort([
      'Alfred',
      'Ben',
      'طارق',
      'Doe',
      'أَحْمَدٌ',
      'Yvonne',
    ]);
    expect(result).to.eql([
      'أَحْمَدٌ',
      'Alfred',
      'Ben',
      'Doe',
      'طارق',
      'Yvonne',
    ]);
  });

  it('should put احمد after A, ذ after D and طارق before Y', () => {
    const result = uniSort([
      'A',
      'Ben',
      'طارق',
      'D',
      'احمد',
      'Y',
      'ذ',
    ]);
    expect(result).to.eql([
      'A',
      'احمد',
      'Ben',
      'D',
      'ذ',
      'طارق',
      'Y',
    ]);
  });
});
