import { types } from "mobx-state-tree";
import Shares from "../1830/1830shares";

const PrivateCompany = types.model("PrivateCompany", {
  PCname: types.maybe(types.string),
  PCShares: types.maybe(types.number)
});

const PrivateCompanies = types.model("PrivateCompanies", {
  PCompaniesArray: types.array(PrivateCompany)
})
.actions(self => ({
  addComp: (Comp) => {
      const PrivateComp = PrivateCompany.create(Comp)
      self.PrivateCompanies.push(Comp)
    } 
}))

const Store1830 = types.model("Store1830", {
  PCompanies: PrivateCompanies
})

const names = Shares.PCompanies1830.PCompanies1830.map(x=>x.Id)
names.forEach((x)=>{PrivateCompanies.addComp({PCname:x, PCShares:0 })})

export default Store1830;
