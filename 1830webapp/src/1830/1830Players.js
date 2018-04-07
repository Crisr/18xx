import CPlayers from "../Core/core_player";
import _ from "lodash";

class Players1830 extends CPlayers {
  constructor() {
    super();
    this.CurrentTotalPlayers = 3;
    this.CurrentAIPlayers = 2;
  }
  get ruleMaxPlayers() {
    return 6;
  } //max 6 Players for 1830
  get ruleMinPlayers() {
    return 3;
  } //min 3 Players
  CreatePlayers(p) {
    const totalPlayers = p.Players + p.AI;
    let MoneyToGive = 0;
    if (totalPlayers === 3) MoneyToGive = 800;
    if (totalPlayers === 4) MoneyToGive = 600;
    if (totalPlayers === 5) MoneyToGive = 480;
    if (totalPlayers === 6) MoneyToGive = 400;
    for (let index = 0; index < p.Players; index++) {
      this.addPlayer({ PType: "Human", money: MoneyToGive, PState: "Playing" });
    }
    for (let index = 0; index < p.AI; index++) {
      this.addPlayer({ PType: "AI", money: MoneyToGive, PState: "Playing" });
    }
    this.CurrentAIPlayers = p.AI;
    this.CurrentTotalPlayers = p.Players;
  }
  get AllPlayersArray() {
    return this.GetGamePlayers;
  }
  get PlayersArray() {
    return _.filter(this.GetGamePlayers, function(o) {
      return o.playerType === "Human";
    });
  }
  get AIArray() {
    return _.filter(this.GetGamePlayers, function(o) {
      return o.playerType === "AI";
    });
  }
}

export default Players1830;
