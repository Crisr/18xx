import Shares from "../1830/1830shares";
import Players1830Store from "./mobxS_Players";
import PrivateCompanies from "./mobxS_PrivateCompanies";
import GameStateInstance from "./mobxS_GameState";
// var GameState = require("./mobxS_GameState");

// initialise Private Companies Store
const names = Shares.PCompanies1830.PCompanies1830.map(x => x.Id);
names.forEach(x => {
  PrivateCompanies.addComp({ PCname: x, PCShares: 0 });
});
// initialise default Players (2AI, 1Human)
Players1830Store.CreatePlayers({ Players: 1, AI: 2 });
const Players = Players1830Store.GamePlayers;

//initialise game state
const GameState = GameStateInstance.create();
// GameState.setState({ GamePhase: "Auction", ActivePlayer: 0 });
// console.log(GameState.ActivePlayer);

export default { PrivateCompanies, Players, GameState };
