class GuessingGame {
    setRange(min, max) {
      if (min > max) throw Error ("Error: min can't be bigger than max.")
      this.min = min
      this.max = max
    }

    findMiddle() {
      return Math.round((this.max + this.min) / 2)
    }

    guess() {
      return this.findMiddle()
    }

    lower() {
      this.max = this.findMiddle()
    }

    greater() {
      this.min = this.findMiddle()
    }
}

module.exports = GuessingGame;
