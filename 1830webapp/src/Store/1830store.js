import { types } from "mobx-state-tree";
import Shares from "../1830/1830shares";

const PublicCompany = types.model("PublicCompany", {
  PCname: types.string,
  PCShares: types.number
});

const PublicCompanies = types.model("PublicCompanies", {
  PCompaniesArray: types.array(PublicCompany)
})
.create({
  PCompaniesArray : Shares.PCompanies1830
})

const Store1830 = types.model("Store1830", {
  PCompanies: PublicCompanies
});

export default Store1830;
