// @ts-check

/**

create a set of flashcards of math facts, add/sub/mult/div min to max, every possible order

permutations problem

let flashcards = []
loop where i = min; i <= max; i++
  let leftSide = i;
  loop where j = min; j <= max; j++
    let righSide = j;
    flashcards.push({})
 */

class Flashcard {
  /**
   * 
   * @param {number} leftSide 
   * @param {number} rightSide 
   * @param {'+' | '-' | 'x' | '/'} operand 
   */
  constructor(
    leftSide,
    rightSide,
    operand,
  ) {
    this.leftSide = leftSide;
    this.rightSide = rightSide;
    this.operand = operand;
  }

  print() {
    console.log(`${this.leftSide} ${this.operand} ${this.rightSide} = ${this.calculate()}`);
  }

  calculate() {
    switch(this.operand) {
      case '+':
        return this.leftSide + this.rightSide;
      case '-':
        return this.leftSide - this.rightSide;
      case 'x':
        return this.leftSide * this.rightSide;
      case '/':
        return this.leftSide / this.rightSide;
    }
  }
}

/**
 * time and space complexity: O((max - min)^2) I think.
 * @param {number} min 
 * @param {number} max 
 * @param {'+' | '-' | 'x' | '/'} operand
 */
function createFlashcards(min, max, operand) {
  const flashcards = [];

  for (let i = min; i <= max; i++) {
    let leftSide = i;
    for (let j = min; j <= max; j++) {
      let rightSide = j;
      flashcards.push(new Flashcard(leftSide, rightSide, operand));
    }
  }

  return flashcards;
}

// let flashcards = createFlashcards(0, 4, 'x');
// console.log(flashcards.length);
// flashcards.forEach(flashcard => flashcard.print());
