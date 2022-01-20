/**
 * @param {array}
 * @return {array}
 */

const dict = {
  ara: {
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
  },
  hebr: {
    א: 'a',
    ב: 'b',
    ג: 'g',
    ד: 'd',
    ה: 'h',
    ו: 'u',
    ז: 's',
    ח: 'h',
    ט: 't',
    י: 'i',
    כ: 'k',
    ך: 'k',
    ל: 'l',
    מ: 'm',
    ם: 'm',
    נ: 'n',
    ן: 'n',
    ס: 's',
    ע: 'ʿ',
    פ: 'p',
    ף: 'p',
    צ: 'z',
    ץ: 'z',
    ק: 'k',
    ר: 'r',
    ש: 's',
    ת: 't',
  },
};

const charsets = {
  ara: {
    alpha: /[\u0621-\u064A]/gi,
    dia: /[\u064B-\u065F]/gi,
  },
  hebr: {
    alpha: /[\u05d0-\u05ea]/gi,
    dia: /[\u0591-\u05c7]/gi,
  },
};

module.exports = (array) => {
  array.sort((a, b) => {
    let newA = a;
    let newB = b;

    Object.keys(charsets).map((lang) => {
      newA = newA
        .replace(charsets[lang].dia, '') // Diacritics
        .replace(charsets[lang].alpha, (c) => dict[lang][c]);
      newB = newB
        .replace(charsets[lang].dia, '') // Diacritics
        .replace(charsets[lang].alpha, (c) => dict[lang][c]);
      return null;
    });

    if (newA.toLowerCase() > newB.toLowerCase()) return 1;
    if (newA.toLowerCase() < newB.toLowerCase()) return -1;
    return 0;
  });
  return array;
};
