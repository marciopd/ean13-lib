import {Ean13Utils} from '../src/Ean13Utils';

describe('Ean13Utils tests', () => {
    describe('Calculating check digits', () => {
        describe('With check digit 1', () => {
            it('Returns correct result', () => {
                const result = Ean13Utils.calculateCheckDigit('262192200504');
                expect(result).toBe(1);
            });
        });
        describe('With check digit 2', () => {
            it('Returns correct result', () => {
                const result = Ean13Utils.calculateCheckDigit('262192200594');
                expect(result).toBe(2);
            });
        });
        describe('With check digit 3', () => {
            it('Returns correct result', () => {
                const result = Ean13Utils.calculateCheckDigit('262192200597');
                expect(result).toBe(3);
            });
        });
        describe('With check digit 4', () => {
            it('Returns correct result', () => {
                const result = Ean13Utils.calculateCheckDigit('262192200602');
                expect(result).toBe(4);
            });
        });
        describe('With check digit 5', () => {
            it('Returns correct result', () => {
                const result = Ean13Utils.calculateCheckDigit('262192200605');
                expect(result).toBe(5);
            });
        });
        describe('With check digit 6', () => {
            it('Returns correct result', () => {
                const result = Ean13Utils.calculateCheckDigit('262192200611');
                expect(result).toBe(6);
            });
        });
        describe('With check digit 7', () => {
            it('Returns correct result', () => {
                const result = Ean13Utils.calculateCheckDigit('262192200614');
                expect(result).toBe(7);
            });
        });
        describe('With check digit 8', () => {
            it('Returns correct result', () => {
                const result = Ean13Utils.calculateCheckDigit('262192200617');
                expect(result).toBe(8);
            });
        });
        describe('With check digit 9', () => {
            it('Returns correct result', () => {
                const result = Ean13Utils.calculateCheckDigit('262192200636');
                expect(result).toBe(9);
            });
        });
        describe('With check digit 0', () => {
            it('Returns correct result', () => {
                const result = Ean13Utils.calculateCheckDigit('262192200639');
                expect(result).toBe(0);
            });
        });
    });
    describe('Generating barcode numbers', () => {
        describe('With check digit 1', () => {
            it('Returns correct result', () => {
                const generatedBarcode = Ean13Utils.generate('262192200517');
                expect(generatedBarcode).toBe(2621922005171);
            });
        });
        describe('With check digit 2', () => {
            it('Returns correct result', () => {
                const generatedBarcode = Ean13Utils.generate('262192200510');
                expect(generatedBarcode).toBe(2621922005102);
            });
        });
        describe('With check digit 3', () => {
            it('Returns correct result', () => {
                const generatedBarcode = Ean13Utils.generate('262192200500');
                expect(generatedBarcode).toBe(2621922005003);
            });
        });
        describe('With check digit 4', () => {
            it('Returns correct result', () => {
                const generatedBarcode = Ean13Utils.generate('262192200503');
                expect(generatedBarcode).toBe(2621922005034);
            });
        });
        describe('With check digit 5', () => {
            it('Returns correct result', () => {
                const generatedBarcode = Ean13Utils.generate('262192200506');
                expect(generatedBarcode).toBe(2621922005065);
            });
        });
        describe('With check digit 6', () => {
            it('Returns correct result', () => {
                const generatedBarcode = Ean13Utils.generate('262192200509');
                expect(generatedBarcode).toBe(2621922005096);
            });
        });
        describe('With check digit 7', () => {
            it('Returns correct result', () => {
                const generatedBarcode = Ean13Utils.generate('262192200515');
                expect(generatedBarcode).toBe(2621922005157);
            });
        });
        describe('With check digit 8', () => {
            it('Returns correct result', () => {
                const generatedBarcode = Ean13Utils.generate('262192200518');
                expect(generatedBarcode).toBe(2621922005188);
            });
        });
        describe('With check digit 9', () => {
            it('Returns correct result', () => {
                const generatedBarcode = Ean13Utils.generate('262192200537');
                expect(generatedBarcode).toBe(2621922005379);
            });
        });
        describe('With check digit 0', () => {
            it('Returns correct result', () => {
                const generatedBarcode = Ean13Utils.generate('262192200530');
                expect(generatedBarcode).toBe(2621922005300);
            });
        });
    });
    describe('Validating barcode numbers', () => {
        describe('With success', () => {
            it('Returns true', () => {
                const result = Ean13Utils.validate('2621922006390');
                expect(result).toBeTruthy();
            });
        });
        describe('With error', () => {
            describe('With wrong check digit', () => {
                it('Returns false', () => {
                    const result = Ean13Utils.validate('2621922006400');
                    expect(result).toBeFalsy();
                });
            });
            describe('With wrong number of digits', () => {
                it('Returns false', () => {
                    const result = Ean13Utils.validate('10000000001');
                    expect(result).toBeFalsy();
                });
            });
        });
    });
});
