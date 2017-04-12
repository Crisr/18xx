'use strict'
const log = require('winston');
const Hex = require('../Core/core_hex').Hex;

class MapHex  {
    constructor () {
        this.Map1830 = [];
    }
    addTile (o) {
        this.Map1830.push(o);
    }
    getTile(index) {return this.Map1830[index]}
}
const map_1830 = new MapHex();

map_1830.addTile(new Hex({Id:'A17'}));

module.exports = {Map1830:map_1830};