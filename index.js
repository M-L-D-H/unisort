'use strict';

/**
 * @param {array}
 */

const dictAra = {
  ا: 'A',
  ع: 'ʿ',
  ب: 'B',
  د: 'D',
  ض: 'D',
  ظ: 'D',
  ذ: 'D',
  ت: 'T',
  ث: 'T',
  ط: 'T',
  ز: 'Z',
  ر: 'R',
  س: 'S',
  ش: 'S',
  ص: 'S',
  غ: 'G',
  ج: 'G',
  ف: 'F',
  ق: 'Q',
  ك: 'K',
  ل: 'L',
  م: 'M',
  ن: 'N',
  ه: 'H',
  ح: 'H',
  خ: 'H',
  و: 'U',
  ي: 'I',
};

module.exports = (array) => {
  array.sort((a, b) => {
    const newA = (Object.keys(dictAra).includes(a)) ? dictAra[a] : a;
    const newB = (Object.keys(dictAra).includes(b)) ? dictAra[b] : b;
    if (newA > newB) return 1;
    if (newA < newB) return -1;
    return 0;
  });
  return array;
};