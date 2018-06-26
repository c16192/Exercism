import {ClassificationInfo} from "typescript";

type Classification = "perfect" | "abundant" | "deficient";
export default class PerfectNumbers {
    public static classify(inputNumber: number): Classification {
        let sum = this.getAliquotSum(inputNumber);
        if (sum === inputNumber) {
            return 'perfect';
        } else if (sum > inputNumber) {
            return 'abundant';
        } else if (sum < inputNumber) {
            return 'deficient';
        } throw "unclassifiable";
    }

    private static getAliquotSum(inputNumber: number): number {
        return this.sumArray(this.getAliquots(inputNumber));
    }

    private static getAliquots(inputNumber: number): number[] {
        if (this.isNaturalNumber(inputNumber)) {
            let aliquots: number[] = [];
            for (let i = 1; i <= inputNumber / 2; i++) {
                if (inputNumber % i === 0) {
                    aliquots.push(i);
                }
            }
            return aliquots;
        } else {
            throw 'Classification is only possible for natural numbers.'
        }
    }

    private static sumArray = (arr: number[]) => arr.reduce((a, b) => a + b, 0);

    private static isNaturalNumber(inputNumber: number): boolean {
        if (isNaN(inputNumber)) {
            return false;
        }
        if (inputNumber == Math.floor(inputNumber) && inputNumber > 0) {
            return true;
        }
        return false;
    }
}