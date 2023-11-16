class SumsGame {
  constructor(min, max, goodAnswer = () => {}, badAnswer = () => {}) {
    this.min = min;
    this.max = max;
    this.goodAnswer = goodAnswer;
    this.badAnswer = badAnswer;
    this.formElement = null;
  }
  generateSum() {
    const firstNumber = Math.floor(
      Math.random() * (this.max - this.min + 1) + this.min
    );
    const secondNumber = Math.floor(
      Math.random() * (this.max - this.min + 1) + this.min
    );
    this.correctSum = firstNumber + secondNumber;

    const form = document.createElement("form");
    this.formElement = form;
    const input = document.createElement("input");
    const submitButton = document.createElement("button");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const userAnswer = parseInt(input.value, 10);
      if (userAnswer === this.correctSum) {
        //here goes other score logic
        this.goodAnswer();

        this.generateSum();
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
      document.createTextNode(`${firstNumber} + ${secondNumber} = `)
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
      sumGame.cleanCurrentForm();
    };
    const dSUMS = () => {
      SCORE.decrementScore();
      console.log("dec");
    };

    //game setup
    const sumGame = new SumsGame(1, 99, iSUMS, dSUMS);
    sumGame.generateSum();

    //timer logic goes outside
    TIMER.setFinishedFunction(() => {
      sumGame.stopAll();
    });

    ///
  });
  document.body.prepend(startButton);
}

createStartButton();
