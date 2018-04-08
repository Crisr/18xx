import { types } from "mobx-state-tree";
// import { Rules as Rules1830 } from "../1830/rules1830";
import _ from "lodash";
const Rules1830 = require("../1830/rules1830").Rules;

const Player = types.model("Player", {
  playerType: types.string,
  playerMoney: types.number,
  playerState: types.string,
  playerName: types.string
});

const GamePlayers = types
  .model("GamePlayers", {
    gPlayers: types.array(Player)
  })
  .actions(self => ({
    addPlayer(pp) {
      self.gPlayers.push(pp);
    }
  }))
  .views(self => ({
    PlayerName(x) {
      return self.gPlayers[x].playerName;
    },
    get PlayersNumber() {
      return self.gPlayers.length;
    },
    get AIPlayers() {
      return _.filter(self.gPlayers, function(o) {
        return o.playerType === "AI";
      });
    },
    get HumanPlayers() {
      return _.filter(self.gPlayers, function(o) {
        return o.playerType === "Human";
      });
    }
  }))
  .create({
    gPlayers: []
  });

const CreatePlayers = (p = { Players: Number, AI: Number }) => {
  const totalPlayers = p.Players + p.AI;
  let MoneyToGive = 0;
  if (totalPlayers === 3) {
    MoneyToGive = Number(Rules1830.Money3PlayerGame);
  }
  if (totalPlayers === 4) {
    MoneyToGive = Number(Rules1830.Money4PlayerGame);
  }
  if (totalPlayers === 5) {
    MoneyToGive = Number(Rules1830.Money5PlayerGame);
  }
  if (totalPlayers === 6) {
    MoneyToGive = Number(Rules1830.Money6PlayerGame);
  }
  for (let index = 0; index < p.Players; index++) {
    GamePlayers.addPlayer({
      playerType: "Human",
      playerMoney: MoneyToGive,
      playerState: "Playing",
      playerName: "Player" + index.toString()
    });
  }
  for (let index = 0; index < p.AI; index++) {
    GamePlayers.addPlayer({
      playerType: "AI",
      playerMoney: MoneyToGive,
      playerState: "Playing",
      playerName: "AI" + index.toString()
    });
  }
};

export default { GamePlayers, CreatePlayers };
