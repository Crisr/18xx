const CBit = require("./core_bit.js");

class GameState extends CBit {
  constructor(state = { GamePhase: String, CurrentPlayer: Number }) {
    super();
    this.GamePhase = state.GamePhase;
    this.CurrentPlayer = state.CurrentPlayer;
  }
}

export default GameState;
