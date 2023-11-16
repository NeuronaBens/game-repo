class Score {
  constructor(scoreDivReference, maxScore = null, minScore = null) {
    this.currentScore = 0;
    this.maxScore = maxScore;
    this.minScore = minScore;
    this.scoreFunction = null;
    this.scoreDivReference = scoreDivReference;
    this.leftSideText = "score: ";
  }

  incrementScore(n = 1) {
    if (this.maxScore === null || this.currentScore + n <= this.maxScore) {
      this.currentScore += n;
      this.displayScore();
    }
  }

  decrementScore(n = 1) {
    if (this.minScore === null || this.currentScore - n >= this.minScore) {
      this.currentScore -= n;
      this.displayScore();
    }
  }

  displayScore() {
    const scoreDiv = document.getElementById(this.scoreDivReference);
    scoreDiv.textContent = `${this.leftSideText}${this.currentScore}`;
  }

  setCssStyle(...options) {
    const scoreDiv = document.getElementById(this.scoreDivReference);
    scoreDiv.className = "score";

    options.forEach((option) => {
      switch (option) {
        case "center":
          scoreDiv.classList.add("score-center");
          break;
        case "small":
          scoreDiv.classList.add("score-small-number");
          break;
        case "medium":
          scoreDiv.classList.add("score-medium-number");
          break;
        case "big":
          scoreDiv.classList.add("score-big-number");
          break;
        case "left":
          scoreDiv.classList.add("score-left");
          break;
        case "inline":
          scoreDiv.classList.add("score-inline");
          break;
        case "full-width":
          scoreDiv.classList.add("score-full-width");
          break;
        // Add more cases for other options as needed
        default:
          break;
      }
    });
  }

  setScoreFunction(newScoreFunction) {
    this.scoreFunction = newScoreFunction;
  }

  setLeftSideScore(newText) {
    this.leftSideText = newText;
  }

  logInfo() {
    const prototypeMethods = Object.getOwnPropertyNames(
      Object.getPrototypeOf(this)
    );

    const availableMethods = prototypeMethods.filter(
      (method) =>
        method !== "constructor" &&
        typeof this[method] === "function" &&
        method !== "logInfo"
    );

    console.log("Available methods for Score class:");
    availableMethods.forEach((method) => {
      console.log(`- ${method}()`);
    });
  }
}
