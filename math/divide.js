class Game {
  constructor(min, max, goodAnswer = () => {}, badAnswer = () => {}) {
    this.min = min;
    this.max = max;
    this.goodAnswer = goodAnswer;
    this.badAnswer = badAnswer;
    this.formElement = null;
  }
  generate(operation, symbol) {
    const firstNumber = Math.floor(
      Math.random() * (this.max - this.min + 1) + this.min
    );
    const secondNumber = Math.floor(
      Math.random() * (this.max - this.min + 1) + this.min
    );

    const divisionNumber = firstNumber * secondNumber;
    this.correct = operation(divisionNumber, secondNumber);

    const form = document.createElement("form");
    this.formElement = form;
    const input = document.createElement("input");
    const submitButton = document.createElement("button");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const userAnswer = parseInt(input.value, 10);
      if (userAnswer === this.correct) {
        //here goes other score logic
        this.goodAnswer();

        this.generate(operation, symbol);
        input.style.color = "black";
      } else {
        //here goes other score logic for losing
        this.badAnswer();

        input.style.backgroundColor = "red";
      }
      input.value = "";
    });

    submitButton.textContent = "Submit";
    form.appendChild(
      document.createTextNode(`${divisionNumber} ${symbol} ${secondNumber} = `)
    );
    form.appendChild(input);
    form.appendChild(submitButton);
    document.body.appendChild(form);
  }
  cleanCurrentForm() {
    if (this.formElement) {
      this.formElement.remove(); // Remove the form and its children from the DOM
    }
  }
  stopAll() {
    if (this.formElement) {
      this.formElement.remove(); // Remove the form and its children from the DOM
    }
  }
}

function createStartButton() {
  const startButton = document.createElement("button");
  startButton.textContent = "Start Game";
  startButton.addEventListener("click", () => {
    ///

    //set UTILS
    const TIMER = new Timer(30, "timer");
    const SCORE = new Score("score");
    SCORE.setCssStyle("big", "center");
    SCORE.setLeftSideScore("");

    //start
    TIMER.start();
    SCORE.displayScore();

    //increment and decrement setups
    const iSUMS = () => {
      SCORE.incrementScore();
      console.log("inc");
      game.cleanCurrentForm();
    };
    const dSUMS = () => {
      SCORE.decrementScore();
      console.log("dec");
    };

    //game setup THIS IS WHAT CHANGES
    const game = new Game(1, 99, iSUMS, dSUMS);
    game.generate((a, b) => {
      return a / b;
    }, "/");

    //timer logic goes outside
    TIMER.setFinishedFunction(() => {
      game.stopAll();
    });

    ///
  });
  document.body.prepend(startButton);
}

createStartButton();
