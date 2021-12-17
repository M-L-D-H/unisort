uniSort
=======

A simple and expandable extension for JavaScript's sort() method to provide an integrative sorting result that includes non-latin alphabets, instead of just adding them at the end. 

# Installation

`npm install @jomula/unisort`

## Usage

```javascript
const numSort = require('@jomula/numsort');
const alphabetUnsorted = ['A','B','ط','D','ا'];

numSort(alphabetUnsorted) // ['A','ا','B','D','ط']
```

## Test

`npm test`

## Contribution

Right now, the extension does only include the Arabic alphabet. It is planned to add more non-latin alphabets (e.g. Hebrew, Farsi, Tamazight, Syriac), however, feel free to contribute by adding an alphabet of your choice.
Please be sure to also add tests for each alphabet you add. Before committing, please test and lint your code according to AirBnb codestyle.
