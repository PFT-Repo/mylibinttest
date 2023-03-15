export class Calculator {
    static getSum(a, b) {
        return a + b;
    }
    static getSubs(a, b) {
        return a - b;
    }
    static getMul(a, b) {
        return a * b;
    }
    static getDiv(a, b) {
        if (b != 0) {
            return a / b;
        }
        else {
            return NaN;
        }
    }
}
;
