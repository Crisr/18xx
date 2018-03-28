import { types } from "mobx-state-tree";
import Shares from "../1830/1830shares";

const PrivateCompany = types.model("PrivateCompany", {
  PCname: types.string,
  PCShares:types.number
})

const PrivateCompanies = types.model("PrivateCompanies", {
 comps: types.array(PrivateCompany)
})
.actions(self => ({
  addComp(comp) {
    self.comps.push(comp)
  }
}))
.create({
  comps: []
})

const names = Shares.PCompanies1830.PCompanies1830.map(x=>x.Id)
names.forEach((x)=>{
  PrivateCompanies.addComp({PCname:x, PCShares:0 })
})

export default {PrivateCompanies};
