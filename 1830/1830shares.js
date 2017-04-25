const log = require('winston');
const GBit = require('../Core/core_bit');
const _= require('underscore');

class Shares1830 extends GBit {
    constructor () {
        super();
        this.Shares1830 =[];
    }

    addShare (o) {
        this.Shares1830.push(o);
    };

    get1830Shares() {return this.Shares1830};
}

class PrivateCompanies1830 extends GBit {
    constructor () {
        super();
        this.PCompanies1830 =[];
    }

    addShare (o) {
        this.PCompanies1830.push(o);
    };

    get1830PCompanies() {return this.PCompanies1830};
}

const shares_1830 = new Shares1830();

shares_1830.addShare({Id:'B&O', Owner:'GAME', ShareFullName:'Baltimore & Ohio Railroad', PresidentShare:'Yes', Quantity:2, SharePercent:0.2});
for (let num=0;num<8;num++) {shares_1830.addShare({Id:'B&O', Owner:'GAME', ShareFullName:'Baltimore & Ohio Railroad', PresidentShare:'No', Quantity:1, SharePercent:0.1})};

shares_1830.addShare({Id:'PRR', Owner:'GAME', ShareFullName:'Pennsylvania Railroad', PresidentShare:'Yes', Quantity:2, SharePercent:0.2});
for (let num=0;num<8;num++) {shares_1830.addShare({Id:'PRR', Owner:'GAME', ShareFullName:'Pennsylvania Railroad', PresidentShare:'No', Quantity:1, SharePercent:0.1})};

shares_1830.addShare({Id:'B&M', Owner:'GAME', ShareFullName:'Boston & Maine Railroad', PresidentShare:'Yes', Quantity:2, SharePercent:0.2});
for (let num=0;num<8;num++) {shares_1830.addShare({Id:'B&M', Owner:'GAME', ShareFullName:'Boston & Maine Railroad', PresidentShare:'No', Quantity:1, SharePercent:0.1})};

shares_1830.addShare({Id:'NNH', Owner:'GAME', ShareFullName:'New York, New Haven & Hartford Railroad', PresidentShare:'Yes', Quantity:2, SharePercent:0.2});
for (let num=0;num<8;num++) {shares_1830.addShare({Id:'NNH', Owner:'GAME', ShareFullName:'New York, New Haven & Hartford Railroad', PresidentShare:'No', Quantity:1, SharePercent:0.1})};

shares_1830.addShare({Id:'C&O', Owner:'GAME', ShareFullName:'Chespeake & Ohio Railroad', PresidentShare:'Yes', Quantity:2, SharePercent:0.2});
for (let num=0;num<8;num++) {shares_1830.addShare({Id:'C&O', Owner:'GAME', ShareFullName:'Chespeake & Ohio Railroad', PresidentShare:'No', Quantity:1, SharePercent:0.1})};

shares_1830.addShare({Id:'NYC', Owner:'GAME', ShareFullName:'New York Central Railroad', PresidentShare:'Yes', Quantity:2, SharePercent:0.2});
for (let num=0;num<8;num++) {shares_1830.addShare({Id:'NYC', Owner:'GAME', ShareFullName:'New York Central Railroad', PresidentShare:'No', Quantity:1, SharePercent:0.1})};

shares_1830.addShare({Id:'CPR', Owner:'GAME', ShareFullName:'Canadian Pacific Railroad', PresidentShare:'Yes', Quantity:2, SharePercent:0.2});
for (let num=0;num<8;num++) {shares_1830.addShare({Id:'B&O', Owner:'GAME', ShareFullName:'Canadian Pacific Railroad', PresidentShare:'No', Quantity:1, SharePercent:0.1})};

shares_1830.addShare({Id:'PMQ', Owner:'GAME', ShareFullName:'Pere Marquette Railroad', PresidentShare:'Yes', Quantity:2, SharePercent:0.2});
for (let num=0;num<8;num++) {shares_1830.addShare({Id:'PMQ', Owner:'GAME', ShareFullName:'Pere Marquette Railroad', PresidentShare:'No', Quantity:1, SharePercent:0.1})};

shares_1830.addShare({Id:'N&W', Owner:'GAME', ShareFullName:'Norfolk & western Railroad', PresidentShare:'Yes', Quantity:2, SharePercent:0.2});
for (let num=0;num<8;num++) {shares_1830.addShare({Id:'N&W', Owner:'GAME', ShareFullName:'Norfolk & western Railroad', PresidentShare:'No', Quantity:1, SharePercent:0.1})};

shares_1830.addShare({Id:'NKP', Owner:'GAME', ShareFullName:'New York, Chicago & St. Louis Railroad', PresidentShare:'Yes', Quantity:2, SharePercent:0.2});
for (let num=0;num<8;num++) {shares_1830.addShare({Id:'NKP', Owner:'GAME', ShareFullName:'New York, Chicago & St. Louis Railroad', PresidentShare:'No', Quantity:1, SharePercent:0.1})};

shares_1830.addShare({Id:'RDR', Owner:'GAME', ShareFullName:'Reading Railroad', PresidentShare:'Yes', Quantity:2, SharePercent:0.2});
for (let num=0;num<8;num++) {shares_1830.addShare({Id:'RDR', Owner:'GAME', ShareFullName:'reading Railroad', PresidentShare:'No', Quantity:1, SharePercent:0.1})};

const pcompanies_1830 = new PrivateCompanies1830();
pcompanies_1830.addShare({Id:'B&O', Owner:'GAME', ShareFullName:'Baltimore & Ohio Railroad', Cost:'220', Revenue:'30'});
pcompanies_1830.addShare({Id:'C&A', Owner:'GAME', ShareFullName:'Camden & Amboy Railroad', Cost:'160', Revenue:'25'});
pcompanies_1830.addShare({Id:'M&H', Owner:'GAME', ShareFullName:'Mohawk & Hudson Railroad', Cost:'110', Revenue:'20'});
pcompanies_1830.addShare({Id:'D&H', Owner:'GAME', ShareFullName:'Delaware & Hudson Railroad', Cost:'70', Revenue:'15'});
pcompanies_1830.addShare({Id:'C&StL', Owner:'GAME', ShareFullName:'Champlain & St. Lawrance Railroad', Cost:'40', Revenue:'10'});
pcompanies_1830.addShare({Id:'SV', Owner:'GAME', ShareFullName:'Schuylkill Valley Nav. & Railroad', Cost:'20', Revenue:'5'});
pcompanies_1830.addShare({Id:'JK', Owner:'GAME', ShareFullName:'James River & Kanawha Canal Company', Cost:'120', Revenue:'20'});
pcompanies_1830.addShare({Id:'P&P', Owner:'GAME', ShareFullName:'Potomac & Piedmont Coal Railroad', Cost:'60', Revenue:'10'});
pcompanies_1830.addShare({Id:'P&L', Owner:'GAME', ShareFullName:'Pittsburgh & Louisville Packet Company', Cost:'30', Revenue:'5'});
pcompanies_1830.addShare({Id:'C&O', Owner:'GAME', ShareFullName:'Chespeake & Ohio Canal Company', Cost:'50', Revenue:'10'});

module.exports = {Shares1830:shares_1830, PCompanies1830:pcompanies_1830};