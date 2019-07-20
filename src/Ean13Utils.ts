export class Ean13Utils {
    public static validate(numberAsString: string): boolean {
        if (!Number(numberAsString) || numberAsString.length !== 13) {
            return false;
        }

        const baseNumber = numberAsString.substr(0, 12);
        const checkDigit = Number(numberAsString.charAt(12));
        const expectedCheckDigit = this.calculateCheckDigit(baseNumber);

        return expectedCheckDigit === checkDigit;
    }

    public static calculateCheckDigit(baseNumberAsString: string): number {
        if (!Number(baseNumberAsString) || baseNumberAsString.length !== 12) {
            throw Error('Not an EAN 13 base number. Must have s number with at most 12 digits.');
        }

        const digits: number[] = [];
        for (let i = 0; i < 12; i++) {
            digits.push(Number(baseNumberAsString.charAt(i)));
        }

        const weightedDigitsSum = digits[0] + digits[1] * 3
            + digits[2] + digits[3] * 3
            + digits[4] + digits[5] * 3
            + digits[6] + digits[7] * 3
            + digits[8] + digits[9] * 3
            + digits[10] + digits[11] * 3;
        const remainder = weightedDigitsSum % 10;

        return remainder === 0 ? 0 : (10 - remainder);
    }

    public static generate(baseNumberAsString: string): number {
        const checkDigit = this.calculateCheckDigit(baseNumberAsString);
        return Number(baseNumberAsString) * 10 + checkDigit;
    }
}
