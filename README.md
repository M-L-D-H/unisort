[![DOI](https://zenodo.org/badge/439264830.svg)](https://zenodo.org/badge/latestdoi/439264830)

uniSort
=======

A simple and expandable extension for JavaScript's sort() method to provide an integrative sorting result that includes non-latin alphabets, instead of just adding them at the end. 

# Installation

`npm install unisort`

## Usage

```javascript
import uniSort from 'unisort';

const alphabetUnsorted = ['A','B','ط','D','ا'];
const namesUnsorted = ['Alfred', 'Ben', 'طارق', 'Daniel', 'احمد', 'Yvonne'];

uniSort(alphabetUnsorted) // ['A', 'ا', 'B', 'D', 'ط']
uniSort(namesUnsorted) // ['احمد', 'Alfred', 'Ben', 'Daniel', 'طارق', 'Yvonne']
```

## Supported Languages
1.0.0
- Arabic

1.1.0
- Hebrew

## Test

`npm test`

## Contribution

Right now, the extension does only include the Arabic and Hebrew alphabet. It is planned to add more non-latin alphabets (e.g. Farsi, Tamazight, Syriac), however, feel free to contribute by adding an alphabet of your choice.
Please be sure to also add tests for each alphabet you add. Before committing, please test and lint your code according to AirBnb codestyle.
