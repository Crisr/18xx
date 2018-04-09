import { types } from "mobx-state-tree";

const GameState = types
  .model("GameState", {
    GamePhase: types.optional(types.string, "Auction"),
    ActivePlayer: types.optional(types.number, 0)
  })
  .actions(self => ({
    setState(pp = { GamePhase: String, ActivePlayer: Number }) {
      self.GamePhase = pp.GamePhase;
      self.ActivePlayer = pp.ActivePlayer;
    }
  }));
// .views(self => ({
//   get GetGamePhase() {
//     return self.GamePhase;
//   },
//   get GetActivePlayer() {
//     return self.ActivePlayer;
//   }
// }));

export default GameState;
