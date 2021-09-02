class GuessingGame {
  assumption = 0
    setRange(min, max) {
      if (min > max) throw Error ("Error: min can't be bigger than max.")
      this.min = min
      this.max = max
    }

    findMiddle() {
      return Math.round((this.max + this.min) / 2)
    }

    guess() {
      this.assumption = this.findMiddle()
      return this.assumption
    }

    lower() {
      this.max = this.assumption
    }

    greater() {
      this.min = this.assumption
    }
}

module.exports = GuessingGame;
