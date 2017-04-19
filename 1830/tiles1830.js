const log = require('winston');
const Hex = require('../Core/core_hex').Hex;
const _= require('underscore');

class Tiles1830 extends Hex {
    constructor () {
        super();
        this.TrackTiles1830 =[];
    }
     /**
     * 
     * 
     * @param {Hex} o Id: String,  Pos:String Axial Map Coords, 'x,y'
     * 
     * @memberOf MapHex
     */
    addTrackTile (o) {
        this.TrackTiles1830.push(o);
    };
    get1830TrackTiles() {return this.TrackTiles1830};
}

const tiles_1830 = new Tiles1830();

for (let num=0;num<7;num++) {tiles_1830.addTrackTile({Id:'A1', Owner:'GAME', Connections:['edge0-edge3'], no:num, Color:'yellow', Upgrades:'B1,B2,B3,B8,B9,B10,B11', Rotated:[]})};
for (let num=0;num<8;num++) {tiles_1830.addTrackTile({Id:'A2', Owner:'GAME', Connections:['edge3-edge5'], no:num, Color:'yellow', Upgrades:'B2,B4,B5,B8,B9,B12,B13,B14', Rotated:[]})};
for (let num=0;num<4;num++) {tiles_1830.addTrackTile({Id:'A3', Owner:'GAME', Connections:['edge3-edge4'], no:num, Color:'yellow', Upgrades:'B3,B10,B11,B13,B14', Rotated:[]})};
for (let num=0;num<2;num++) {tiles_1830.addTrackTile({Id:'A4', Owner:'GAME', Connections:['edge0-tS-edge3'], no:num, Color:'yellow', Upgrades:'B24,B25', Rotated:[]})};
for (let num=0;num<2;num++) {tiles_1830.addTrackTile({Id:'A5', Owner:'GAME', Connections:['edge3-tS-edge5'], no:num, Color:'yellow', Upgrades:'B24,B25,B26,B27', Rotated:[]})};
for (let num=0;num<2;num++) {tiles_1830.addTrackTile({Id:'A6', Owner:'GAME', Connections:['edge3-tS-edge4'], no:num, Color:'yellow', Upgrades:'B24,B25,B26', Rotated:[]})};
for (let num=0;num<4;num++) {tiles_1830.addTrackTile({Id:'A7', Owner:'GAME', Connections:['edge0-bC-edge3'], no:num, Color:'yellow', Upgrades:'B35,B36,B37', Rotated:[]})};
// for (let num=0;num<2;num++) {tiles_1830.addTrackTile({Id:'A8', Owner:'GAME', Connections:['edge3-bC-edge5'], no:num, Color:'yellow', Upgrades:'B35,B36,B37', Rotated:[]})};
// for (let num=0;num<2;num++) {tiles_1830.addTrackTile({Id:'A9', Owner:'GAME', Connections:['edge3-bC-edge4'], no:num, Color:'yellow', Upgrades:'B35,B36,B37', Rotated:[]})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'A10', Owner:'GAME', Connections:['edge0-ts-edge3', 'edge2-tS-edge5'], no:num, Color:'yellow', Upgrades:'B28', Rotated:[]})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'A11', Owner:'GAME', Connections:['edge0-ts-edge3', 'edge1-tS-edge5'], no:num, Color:'yellow', Upgrades:'B29', Rotated:[]})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'A12', Owner:'GAME', Connections:['edge0-ts-edge3', 'edge1-tS-edge2'], no:num, Color:'yellow', Upgrades:'B30', Rotated:[]})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'A13', Owner:'GAME', Connections:['edge0-ts-edge2', 'edge3-tS-edge5'], no:num, Color:'yellow', Upgrades:'B28', Rotated:[]})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'A14', Owner:'GAME', Connections:['edge0-ts-edge2', 'edge1-tS-edge3'], no:num, Color:'yellow', Upgrades:'B30', Rotated:[]})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'A15', Owner:'GAME', Connections:['edge3-ts-edge5', 'edge1-tS-edge2'], no:num, Color:'yellow', Upgrades:'B29', Rotated:[]})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'A16', Owner:'GAME', Connections:['edge4-ts-edge5', 'edge1-tS-edge3'], no:num, Color:'yellow', Upgrades:'B29', Rotated:[]})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'A17', Owner:'GAME', Connections:['edge0-ts-edge1', 'edge2-tS-edge3'], no:num, Color:'yellow', Upgrades:'B30', Rotated:[]})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'A18', Owner:'GAME', Connections:['edge4-ts-edge5', 'edge2-tS-edge3'], no:num, Color:'yellow', Upgrades:'B28', Rotated:[]})};

module.exports = {Tiles1830:tiles_1830};