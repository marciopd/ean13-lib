# EAN 13 lib

Typescript library for [EAN 13 numbers](https://en.wikipedia.org/wiki/International_Standard_Book_Number#ISBN-13_check_digit_calculation) basic features.

## Installation

```bash
$ npm i ean13-lib --save
```

## Usage

### Number Validation
Returns if the input (13 length digits string) is an EAN 13 number or not.
```
import { Ean13Utils } from 'ean13-lib';

const result = Ean13Utils.validate('2621922006400');
expect(result).toBeFalsy();
                    
const result = Ean13Utils.validate('2621922006390');
expect(result).toBeTruthy();
```

### Check digit calculation
Calculates the input (12 digits string) check digit.
```
const result = Ean13Utils.calculateCheckDigit('262192200517');
expect(result).toBe(1);
```

### Number Generation
Returns the input with the calculated check digit as the 13th digit.
```
const generatedBarcode = Ean13Utils.generate('262192200517');
expect(generatedBarcode).toBe(2621922005171);
```


