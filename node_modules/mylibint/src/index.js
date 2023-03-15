export class Calculator {
    getSum(a, b) {
        return a + b;
    }
    getSubs(a, b) {
        return a - b;
    }
    getMul(a, b) {
        return a * b;
    }
    getDiv(a, b) {
        if (b != 0) {
            return a / b;
        }
        else {
            return NaN;
        }
    }
}
;
