const CBit = require("./core_bit.js");
// const log = require('winston');

//object Pawn is a basic gameboard bit that has an owner
class cPawn extends CBit {
  constructor(o) {
    super();
    this.pColor = "white";
    this.Owner = o !== undefined ? o : "GAME";
    this.previousOwner = "";
  }

  /**
   * Gets the color of the pawn
   *
   * @returns
   * string
   * @memberOf cPawn
   */
  get GetColor() {
    return this.pColor;
  }

  /**
   * Sets the color of the pawn
   *
   * @param {string} s the color of the pawn to a string value
   *
   * @memberOf cPawn
   */
  set SetColor(s) {
    this.pColor = s;
  }
}
module.exports = cPawn;
