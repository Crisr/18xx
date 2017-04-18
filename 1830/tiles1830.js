const log = require('winston');
const Hex = require('../Core/core_hex').Hex;
const _= require('underscore');

class Tiles1830 extends Hex {
    constructor () {
        super();
        this.Tiles1830 =[];
    }
     /**
     * 
     * 
     * @param {Hex} o Id: String,  Pos:String Axial Map Coords, 'x,y'
     * 
     * @memberOf MapHex
     */
    addTile (o) {
        this.Map1830.push(o);
    };
    get1830Tiles() {return this.Tiles1830};
}

const tiles_1830 = new MapHex();

tiles_1830.addTile({Id:'A1'});

module.exports = {Tiles1830:tiles_1830};