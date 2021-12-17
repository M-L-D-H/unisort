/**
 * @param {array}
 * @return {array}
 */

const dictAra = {
  ا: 'a',
  أ: 'a',
  ع: 'ʿ',
  ب: 'b',
  د: 'd',
  ض: 'd',
  ظ: 'd',
  ذ: 'd',
  ت: 't',
  ث: 't',
  ط: 't',
  ز: 'z',
  ر: 'r',
  س: 's',
  ش: 's',
  ص: 's',
  غ: 'g',
  ج: 'g',
  ف: 'f',
  ق: 'q',
  ك: 'k',
  ل: 'l',
  م: 'm',
  ن: 'n',
  ه: 'h',
  ح: 'h',
  خ: 'h',
  و: 'u',
  ي: 'i',
  إ: 'i',
  ء: 'ʾ',
  ؤ: 'u',
};

module.exports = (array) => {
  array.sort((a, b) => {
    // Arabic Charset
    const newA = a
      .replace(/[\u064B-\u065F]/gi, '') // Diacritics
      .replace(/[\u0621-\u064A]/gi, (c) => dictAra[c]);
    const newB = b
      .replace(/[\u064B-\u065F]/gi, '') // Diacritics
      .replace(/[\u0621-\u064A]/gi, (c) => dictAra[c]);

    if (newA.toLowerCase() > newB.toLowerCase()) return 1;
    if (newA.toLowerCase() < newB.toLowerCase()) return -1;
    return 0;
  });
  return array;
};
