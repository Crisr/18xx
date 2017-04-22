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

const shares_1830 = new Shares1830();

for (let num=0;num<7;num++) {shares_1830.addShare({Id:'A1', Owner:'GAME', Connections:['edge0-edge3'], no:num, Color:'yellow', Upgrades:'B1,B2,B3,B8,B9,B10,B11', Value:0, Rotated:0})};

module.exports = {Shares1830:shares_1830};