class Timer {
  constructor(
    duration,
    displayElementId,
    updatedFunction = () => {},
    finishedFunction = () => {}
  ) {
    this.duration = duration;
    this.durationValue = duration;
    this.displayElement = document.getElementById(displayElementId);
    this.intervalId = null;
    this.isRunning = false;

    this.updatedFunction = updatedFunction;
    this.finishedFunction = finishedFunction;

    this.finishedFunctionLeft = 0;
  }

  start() {
    //control
    this.reset();
    if (!this.isRunning) {
      this.isRunning = true;
      this.intervalId = setInterval(() => {
        this.updateTimer();
      }, 1000);
    }
  }

  pause() {
    //control
    this.isRunning = false;
  }

  continue() {
    this.isRunning = true;
  }

  reset() {
    //inner
    clearInterval(this.intervalId);
    this.isRunning = false;
    this.duration = this.durationValue;
    this.updateDisplay();
  }

  updateTimer() {
    //inner
    if (this.isRunning) {
      if (this.duration > 0) {
        this.duration--;
        this.updateDisplay();
        this.updatedFunction();
        this.finishedFunctionLeft = 1;
      } else {
        this.pause();
        clearInterval(this.intervalId);
        if (this.finishedFunctionLeft === 1) {
          this.finishedFunction();
          this.finishedFunctionLeft = 0;
        }
      }
    }
  }

  updateDisplay() {
    //inner
    const minutes = Math.floor(this.duration / 60);
    const seconds = this.duration % 60;
    const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
    this.displayElement.textContent = formattedTime;
  }

  isTimerFinished() {
    //usable
    return this.duration === 0;
  }

  setDuration(newDuration) {
    //re-setter
    this.duration = newDuration;
  }
  setUpdatedFunction(updateAction) {
    //re-setter
    this.updatedFunction = updateAction;
  }
  setFinishedFunction(finishAction) {
    //re-setter
    this.finishedFunction = finishAction;
  }

  test() {
    //test
    console.log("testing timer");
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

    console.log("Available methods for Time class:");
    availableMethods.forEach((method) => {
      console.log(`- ${method}()`);
    });
  }
}
