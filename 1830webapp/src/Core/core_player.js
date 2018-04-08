const CBit = require("./core_bit.js");

class cPlayer extends CBit {
  constructor(
    p = { PType: String, money: Number, PState: String, Name: String }
  ) {
    super();
    this.playerType = p.PType; //can be 'Human' or 'AI'
    this.playerMoney = p.money;
    this.playerState = p.PState; // can be "Playing"/"Bankrupt"/etc
    this.Name = p.Name;
  }
}

class cGamePlayers {
  constructor() {
    this.GamePlayers = [cPlayer]; //Array of corePlayers
    this.GameMoney = 0;
  }
  addPlayer(p) {
    const newP = new cPlayer(p);
    this.push(newP);
  }
  set SetGameMoney(money) {
    this.GameMoney = money;
  }
  get GetGameMoney() {
    return this.GameMoney;
  }
  get GetGamePlayers() {
    return this.GamePlayers;
  }
  get GetNumberOfPlayers() {
    return this.GamepPlayers.lenght;
  }
  get GetName() {
    return this.Name;
  }
  set SetName(s) {
    this.Name = s;
  }
}

export default cGamePlayers;
