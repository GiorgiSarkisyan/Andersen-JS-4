class Calculator {
  constructor() {
    this.x = undefined;
    this.y = undefined;

    this.logSum = this.logSum.bind(this);
    this.logMul = this.logMul.bind(this);
    this.logSub = this.logSub.bind(this);
    this.logDiv = this.logDiv.bind(this);
  }

  setX(givenNumber) {
    if (typeof givenNumber !== "number" && !isFinite(givenNumber)) {
      throw new Error("X is not a valid number");
    }
    this.x = givenNumber;
  }

  setY(givenNumber) {
    if (typeof givenNumber !== "number" && !isFinite(givenNumber)) {
      throw new Error("Y is not a valid number");
    }
    this.y = givenNumber;
  }

  logSum() {
    return this.x + this.y;
  }

  logMul() {
    return this.x * this.y;
  }

  logSub() {
    return this.x > this.y ? this.x - this.y : this.y - this.x;
  }

  logDiv() {
    if (this.y === 0) throw new Error("Cannot divide by zero!");

    return this.x / this.y;
  }
}

const calc = new Calculator();
calc.setX(5);
calc.setY(5);

const logSumRef = calc.logSum;
const logMulRef = calc.logMul;
const logSubRef = calc.logSub;
const logDivRef = calc.logDiv;

console.log(calc.logSum());
console.log(calc.logMul());
console.log(calc.logSub());
console.log(calc.logDiv());

// this is my first version where constructor does not accept two numbers and works only using setX and setY, it can't accept numbers using constructor

// and this is my second version where constructor does accept two numbers and also works using setX and setY

// class Calculator {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     if (typeof this.x !== "number" && !isFinite(this.x)) {
//       throw new Error("X is not a valid number");
//     }
//     if (typeof this.y !== "number" && !isFinite(this.y)) {
//       throw new Error("Y is not a valid number");
//     }

//     this.logSum = this.logSum.bind(this);
//     this.logMul = this.logMul.bind(this);
//     this.logSub = this.logSub.bind(this);
//     this.logDiv = this.logDiv.bind(this);
//   }

//   setX(givenNumber) {
//     if (typeof givenNumber !== "number" && !isFinite(givenNumber)) {
//       throw new Error("X is not a valid number");
//     }
//     this.x = givenNumber;
//   }

//   setY(givenNumber) {
//     if (typeof givenNumber !== "number" && !isFinite(givenNumber)) {
//       throw new Error("Y is not a valid number");
//     }
//     this.y = givenNumber;
//   }

//   logSum() {
//     return this.x + this.y;
//   }

//   logMul() {
//     return this.x * this.y;
//   }

//   logSub() {
//     return this.x > this.y ? this.x - this.y : this.y - this.x;
//   }

//   logDiv() {
//     if (this.y === 0) throw new Error("Cannot divide by zero!");

//     return this.x / this.y;
//   }
// }

// const calc = new Calculator(2, 3);
// calc.setX(5);
// calc.setY(5);

// const logSumRef = calc.logSum;
// const logMulRef = calc.logMul;
// const logSubRef = calc.logSub;
// const logDivRef = calc.logDiv;

// console.log(logSumRef());
// console.log(logMulRef());
// console.log(logSubRef());
// console.log(logDivRef());
