'use strict';

// class someClass {
//     doSomething() {
//         return 'I did something !';
//     }
//
//     oneMoreThingToDo() {
//         return 'I did something else !';
//     }
// }
class calculator {
    add(a, b) {
        return a + b;
    }

    multiply(a, b) {
        return a * b;
    }
}

// module.exports = someClass;
module.exports = calculator;