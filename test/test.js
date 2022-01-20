const { expect } = require('chai');
const uniSort = require('../index');

// Test for Arabic
describe('#unisort', () => {
  it('should put ا after a, ط after d, א after ا, ط after ק', () => {
    const result = uniSort([
      'A',
      'B',
      'ק',
      'ط',
      'D',
      'ا',
      'א',
    ]);
    expect(result).to.eql([
      'A',
      'ا',
      'א',
      'B',
      'D',
      'ק',
      'ط',
    ]);
  });

  it('should put أَحْمَدٌ before Alfred and طارق after נֹחַ, רוּת after Danielle, רוּת after נֹחַ', () => {
    const result = uniSort([
      'Alfred',
      'רוּת',
      'Ben',
      'طارق',
      'Danielle',
      'أَحْمَدٌ',
      'Yvonne',
      'נֹחַ',
    ]);
    expect(result).to.eql([
      'أَحْمَدٌ',
      'Alfred',
      'Ben',
      'Danielle',
      'נֹחַ',
      'רוּת',
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
