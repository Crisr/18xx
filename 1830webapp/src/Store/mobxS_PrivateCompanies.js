import { types } from "mobx-state-tree";

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

export default PrivateCompanies;
