import { types } from "mobx-state-tree";
import Shares from "../1830/1830shares";
import Players1830 from "../1830/1830Players";

// import _ from "lodash";

const PrivateCompany = types.model("PrivateCompany", {
  PCname: types.string,
  PCShares: types.number
});

const PrivateCompanies = types
  .model("PrivateCompanies", {
    comps: types.array(PrivateCompany)
  })
  .actions(self => ({
    addComp(comp) {
      self.comps.push(comp);
    }
  }))
  .views(self => ({
    get compname() {
      return 1;
    },
    get compno() {
      return self.comps.length;
    }
  }))
  .create({
    comps: []
  });

const PlayersStore = types
  .model("PlayersStore", {
    AllPlayersArray: types.array(),
    AIPlayers: types.number,
    HumanPlayers: types.number,
    Validated: false
  })
  .create({
    AllPlayersArray: []
  });

const names = Shares.PCompanies1830.PCompanies1830.map(x => x.Id);
names.forEach(x => {
  PrivateCompanies.addComp({ PCname: x, PCShares: 0 });
});

export default { PrivateCompanies, PlayersStore };
