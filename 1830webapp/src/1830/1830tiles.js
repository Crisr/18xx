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

for (let num=0;num<7;num++) {tiles_1830.addTrackTile({Id:'A1', Owner:'GAME', Connections:['edge0-edge3'], no:num, Color:'yellow', Upgrades:'B1,B2,B3,B8,B9,B10,B11', Value:0, Rotated:0})};
// for (let num=0;num<12;num++) {tiles_1830.addTrackTile({Id:'A1', Owner:'GAME', Connections:['edge0-edge3'], no:num, Color:'yellow', Upgrades:'B1,B2,B3,B8,B9,B10,B11', Value:0, Rotated:0})};
for (let num=0;num<8;num++) {tiles_1830.addTrackTile({Id:'A2', Owner:'GAME', Connections:['edge3-edge5'], no:num, Color:'yellow', Upgrades:'B2,B4,B5,B8,B9,B12,B13,B14', Value:0, Rotated:0})};
// for (let num=0;num<13;num++) {tiles_1830.addTrackTile({Id:'A2', Owner:'GAME', Connections:['edge3-edge5'], no:num, Color:'yellow', Upgrades:'B2,B4,B5,B8,B9,B12,B13,B14', Value:0, Rotated:0})};
for (let num=0;num<4;num++) {tiles_1830.addTrackTile({Id:'A3', Owner:'GAME', Connections:['edge3-edge4'], no:num, Color:'yellow', Upgrades:'B3,B10,B11,B13,B14', Value:0, Rotated:0})};
// for (let num=0;num<7;num++) {tiles_1830.addTrackTile({Id:'A3', Owner:'GAME', Connections:['edge3-edge4'], no:num, Color:'yellow', Upgrades:'B3,B10,B11,B13,B14', Value:0, Rotated:0})};
for (let num=0;num<2;num++) {tiles_1830.addTrackTile({Id:'A4', Owner:'GAME', Connections:['edge0-tS-edge3'], no:num, Color:'yellow', Upgrades:'B24,B25', Value:10, Rotated:0})};
for (let num=0;num<2;num++) {tiles_1830.addTrackTile({Id:'A5', Owner:'GAME', Connections:['edge3-tS-edge5'], no:num, Color:'yellow', Upgrades:'B24,B25,B26,B27',  Value:10, Rotated:0})};
for (let num=0;num<2;num++) {tiles_1830.addTrackTile({Id:'A6', Owner:'GAME', Connections:['edge3-tS-edge4'], no:num, Color:'yellow', Upgrades:'B24,B25,B26', Value:10,  Rotated:0})};
for (let num=0;num<4;num++) {tiles_1830.addTrackTile({Id:'A7', Owner:'GAME', Connections:['edge0-bC-edge3'], no:num, Color:'yellow', Upgrades:'B35,B36,B37', Value:20, Rotated:0})};
// for (let num=0;num<6;num++) {tiles_1830.addTrackTile({Id:'A7', Owner:'GAME', Connections:['edge0-bC-edge3'], no:num, Color:'yellow', Upgrades:'B35,B36,B37', Value:20, Rotated:0})};
// for (let num=0;num<2;num++) {tiles_1830.addTrackTile({Id:'A8', Owner:'GAME', Connections:['edge3-bC-edge5'], no:num, Color:'yellow', Upgrades:'B35,B36,B37', Value:20, Rotated:0})};
// for (let num=0;num<2;num++) {tiles_1830.addTrackTile({Id:'A9', Owner:'GAME', Connections:['edge3-bC-edge4'], no:num, Color:'yellow', Upgrades:'B35,B36,B37', Value:20, Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'A10', Owner:'GAME', Connections:['edge0-ts-edge3', 'edge2-tS-edge5'], no:num, Color:'yellow', Upgrades:'B28', Value:10, Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'A11', Owner:'GAME', Connections:['edge0-ts-edge3', 'edge1-tS-edge5'], no:num, Color:'yellow', Upgrades:'B29', Value:10, Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'A12', Owner:'GAME', Connections:['edge0-ts-edge3', 'edge1-tS-edge2'], no:num, Color:'yellow', Upgrades:'B30', Value:10, Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'A13', Owner:'GAME', Connections:['edge0-ts-edge2', 'edge3-tS-edge5'], no:num, Color:'yellow', Upgrades:'B28', Value:10, Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'A14', Owner:'GAME', Connections:['edge0-ts-edge2', 'edge1-tS-edge3'], no:num, Color:'yellow', Upgrades:'B30',Value:10,  Rotated:0})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'A15', Owner:'GAME', Connections:['edge3-ts-edge5', 'edge1-tS-edge2'], no:num, Color:'yellow', Upgrades:'B29', Value:10, Rotated:0})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'A16', Owner:'GAME', Connections:['edge4-ts-edge5', 'edge1-tS-edge3'], no:num, Color:'yellow', Upgrades:'B29', Value:10, Rotated:0})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'A17', Owner:'GAME', Connections:['edge0-ts-edge1', 'edge2-tS-edge3'], no:num, Color:'yellow', Upgrades:'B30', Value:10, Rotated:0})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'A18', Owner:'GAME', Connections:['edge4-ts-edge5', 'edge2-tS-edge3'], no:num, Color:'yellow', Upgrades:'B28', Value:10, Rotated:0})};
for (let num=0;num<2;num++) {tiles_1830.addTrackTile({Id:'bb1', Owner:'GAME', Connections:['edge1-bC-edge3', 'edge3-bC-edge5',  'edge1-bC-edge5'], no:num, Color:'green', Upgrades:'bb5,bb6,bb7', Value:50, Rotated:0})};
// for (let num=0;num<2;num++) {tiles_1830.addTrackTile({Id:'bb2', Owner:'GAME', Connections:['edge1-bC-bC-edge3', 'edge3-bC-bC-edge5',  'edge1-bC-bC-edge5'], no:num, Color:'green', Upgrades:'bb5,bb6,bb7', Value:50, Rotated:0})};
for (let num=0;num<2;num++) {tiles_1830.addTrackTile({Id:'bb5', Owner:'GAME', Connections:['edge0-bC-edge1', 'edge0-bC-edge5',  'edge1-bC-edge5',  'edge0-bC-edge3',  'edge1-bC-edge3',  'edge5-bC-edge3'], no:num, Color:'brown', Upgrades:'', Value:60, Rotated:0})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'bb6', Owner:'GAME', Connections:['edge0-bC-bC-bC-edge1', 'edge0-bC-bC-bC-edge5',  'edge1-bC-bC-bC-edge5',  'edge0-bC-bC-bC-edge3',  'edge1-bC-bC-bC-edge3',  'edge5-bC-bC-bC-edge3'], no:num, Color:'brown', Upgrades:'', Value:60, Rotated:0})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'bb7', Owner:'GAME', Connections:['edge0-bC-bC-edge1', 'edge0-bC-bC-edge5',  'edge1-bC-bC-edge5',  'edge0-bC-bC-edge3',  'edge1-bC-bC-edge3',  'edge5-bC-bC-edge3'], no:num, Color:'brown', Upgrades:'', Value:60, Rotated:0})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'to1', Owner:'GAME', Connections:['edge5-bC-bC-edge1', 'edge5-bC-bC-edge0',  'edge0-bC-bC-edge1',  'edge4-bC-edge2',  'edge4-bC-edge3',  'edge2-bC-edge3'], no:num, Color:'green', Upgrades:'to5', DesignatedHex:'D10', Value:50, Rotated:0})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'to5', Owner:'GAME', Connections:['edge5-bC-bC-edge1', 'edge5-bC-bC-edge0',  'edge0-bC-bC-edge1',  'edge4-bC-bC-edge2',  'edge4-bC-bC-edge3',  'edge2-bC-bC-edge3'], no:num, Color:'brown', Upgrades:'', DesignatedHex:'D10', Value:70, Rotated:0})};

for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'B1', Owner:'GAME', Connections:['edge0-edge3', 'edge2-edge5'], no:num, Color:'green', Upgrades:'C5,C6', Value:0, Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'B2', Owner:'GAME', Connections:['edge0-edge3', 'edge1-edge5'], no:num, Color:'green', Upgrades:'C7,C8', Value:0, Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'B3', Owner:'GAME', Connections:['edge0-edge3', 'edge1-edge2'], no:num, Color:'green', Upgrades:'C9', Value:0, Rotated:0})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'B4', Owner:'GAME', Connections:['edge0-edge2', 'edge3-edge5'], no:num, Color:'green', Upgrades:'C5', Value:0, Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'B5', Owner:'GAME', Connections:['edge0-edge2', 'edge1-edge3'], no:num, Color:'green', Upgrades:'C9,C10', Value:0, Rotated:0})};
for (let num=0;num<3;num++) {tiles_1830.addTrackTile({Id:'B8', Owner:'GAME', Connections:['edge0-edge3', 'edge1-edge3'], no:num, Color:'green', Upgrades:'C1,C5,C7,C9', Value:0, Rotated:0})};
for (let num=0;num<3;num++) {tiles_1830.addTrackTile({Id:'B9', Owner:'GAME', Connections:['edge0-edge3', 'edge0-edge5'], no:num, Color:'green', Upgrades:'C2,C5,C8,C9', Value:0, Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'B10', Owner:'GAME', Connections:['edge0-edge3', 'edge2-edge3'], no:num, Color:'green', Upgrades:'C2,C6,C7', Value:0, Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'B11', Owner:'GAME', Connections:['edge0-edge3', 'edge3-edge4'], no:num, Color:'green', Upgrades:'C1,C6,C8', Value:0, Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'B12', Owner:'GAME', Connections:['edge1-edge3', 'edge3-edge5'], no:num, Color:'green', Upgrades:'C3,C7,C8', Value:0, Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'B13', Owner:'GAME', Connections:['edge1-edge3', 'edge2-edge3'], no:num, Color:'green', Upgrades:'C4,C8,C10', Value:0, Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'B14', Owner:'GAME', Connections:['edge3-edge4', 'edge3-edge5'], no:num, Color:'green', Upgrades:'C4,C7,C10', Value:0, Rotated:0})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'B24', Owner:'GAME', Connections:['edge0-sC-edge3', 'edge1-sC-edge3','edge0-sC-edge1'], no:num, Color:'green', Upgrades:'C11,C12,C13', Value:10, Rotated:0})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'B25', Owner:'GAME', Connections:['edge0-sC-edge3', 'edge5-sC-edge3','edge0-sC-edge5'], no:num, Color:'green', Upgrades:'C11,C12,C13', Value:10, Rotated:0})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'B26', Owner:'GAME', Connections:['edge3-sC-edge1', 'edge3-sC-edge2','edge2-sC-edge1'], no:num, Color:'green', Upgrades:'C12,C13', Value:10, Rotated:0})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'B27', Owner:'GAME', Connections:['edge1-sC-edge3', 'edge3-sC-edge5','edge5-sC-edge1'], no:num, Color:'green', Upgrades:'C12', Value:10, Rotated:0})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'B28', Owner:'GAME', Connections:['edge0-sC-edge3', 'edge2-sC-edge5','edge0-sC-edge5','edge3-sC-edge2','edge3-sC-edge5','edge0-sC-edge2'], no:num, Color:'green', Upgrades:'C11', Value:10, Rotated:0})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'B29', Owner:'GAME', Connections:['edge0-sC-edge3', 'edge1-sC-edge5','edge0-sC-edge5','edge0-sC-edge1','edge3-sC-edge5','edge3-sC-edge1'], no:num, Color:'green', Upgrades:'C12', Value:10, Rotated:0})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'B30', Owner:'GAME', Connections:['edge0-sC-edge1', 'edge1-sC-edge2','edge2-sC-edge3','edge0-sC-edge2','edge1-sC-edge3','edge0-sC-edge3'], no:num, Color:'green', Upgrades:'C13', Value:10, Rotated:0})};
for (let num=0;num<3;num++) {tiles_1830.addTrackTile({Id:'B35', Owner:'GAME', Connections:['edge0-bC-bC-edge3', 'edge2-bC-bC-edge5','edge0-bC-bC-edge5','edge3-bC-bC-edge2','edge3-bC-bC-edge5','edge0-bC-bC-edge2'], no:num, Color:'green', Upgrades:'C15', Value:30, Rotated:0})};
// for (let num=0;num<4;num++) {tiles_1830.addTrackTile({Id:'B36', Owner:'GAME', Connections:['edge0-bC-bC-edge3', 'edge2-bC-bC-edge5','edge0-bC-bC-edge5','edge3-bC-bC-edge2','edge3-bC-bC-edge5','edge0-bC-bC-edge2'], no:num, Color:'green', Upgrades:'C15', Value:30, Rotated:0})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'B36', Owner:'GAME', Connections:['edge3-bC-bC-edge5', 'edge1-bC-bC-edge2','edge1-bC-bC-edge3','edge2-bC-bC-edge5','edge1-bC-bC-edge5','edge2-bC-bC-edge3'], no:num, Color:'green', Upgrades:'C15', Value:30, Rotated:0})};
for (let num=0;num<2;num++) {tiles_1830.addTrackTile({Id:'B37', Owner:'GAME', Connections:['edge0-bC-bC-edge1', 'edge1-bC-bC-edge2','edge2-bC-bC-edge3','edge0-bC-bC-edge2','edge1-bC-bC-edge3','edge0-bC-bC-edge3'], no:num, Color:'green', Upgrades:'C15', Value:30, Rotated:0})};
// for (let num=0;num<4;num++) {tiles_1830.addTrackTile({Id:'B37', Owner:'GAME', Connections:['edge0-bC-bC-edge1', 'edge1-bC-bC-edge2','edge2-bC-bC-edge3','edge0-bC-bC-edge2','edge1-bC-bC-edge3','edge0-bC-bC-edge3'], no:num, Color:'green', Upgrades:'C15', Value:30, Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'ny1', Owner:'GAME', Connections:['edge0-bC1-edge5', 'edge1-bC2-edge2'], no:num, Color:'green', Upgrades:'ny5,ny6', Value:60, DesignatedHex:'G19', Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'ny5', Owner:'GAME', Connections:['edge0-bC1-bC1-edge5', 'edge2-bC2-bC2-edge3'], no:num, Color:'brown', Upgrades:'', Value:80, DesignatedHex:'G19', Rotated:0})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'ny6', Owner:'GAME', Connections:['edge0-sC-edge1', 'edge1-sC-edge2','edge2-sC-edge3','edge0-sC-edge2','edge1-sC-edge3','edge0-sC-edge3'], no:num, Color:'brown', Upgrades:'', Value:80, DesignatedHex:'G19', Rotated:0})};

for (let num=0;num<2;num++) {tiles_1830.addTrackTile({Id:'C1', Owner:'GAME', Connections:['edge0-edge3', 'edge1-edge2', 'edge0-edge1'], no:num, Color:'brown', Upgrades:'', Value:0, Rotated:0})};
for (let num=0;num<2;num++) {tiles_1830.addTrackTile({Id:'C2', Owner:'GAME', Connections:['edge0-edge3', 'edge3-edge5', 'edge0-edge5'], no:num, Color:'brown', Upgrades:'', Value:0, Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'C3', Owner:'GAME', Connections:['edge1-edge3', 'edge3-edge5', 'edge1-edge5'], no:num, Color:'brown', Upgrades:'', Value:0, Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'C4', Owner:'GAME', Connections:['edge2-edge4', 'edge2-edge3', 'edge3-edge4'], no:num, Color:'brown', Upgrades:'', Value:0, Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'C5', Owner:'GAME', Connections:['edge0-edge2', 'edge3-edge5', 'edge0-edge3'], no:num, Color:'brown', Upgrades:'', Value:0, Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'C6', Owner:'GAME', Connections:['edge0-edge3', 'edge2-edge5', 'edge0-edge5','edge2-edge3'], no:num, Color:'brown', Upgrades:'', Value:0, Rotated:0})};
for (let num=0;num<2;num++) {tiles_1830.addTrackTile({Id:'C7', Owner:'GAME', Connections:['edge1-edge2', 'edge1-edge3', 'edge3-edge5','edge2-edge5'], no:num, Color:'brown', Upgrades:'', Value:0, Rotated:0})};
for (let num=0;num<2;num++) {tiles_1830.addTrackTile({Id:'C8', Owner:'GAME', Connections:['edge4-edge5', 'edge3-edge5', 'edge3-edge2','edge2-edge5','edge1-edge2'], no:num, Color:'brown', Upgrades:'', Value:0, Rotated:0})};
for (let num=0;num<2;num++) {tiles_1830.addTrackTile({Id:'C9', Owner:'GAME', Connections:['edge0-edge3', 'edge0-edge2', 'edge1-edge3','edge1-edge2'], no:num, Color:'brown', Upgrades:'', Value:0, Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'C10', Owner:'GAME', Connections:['edge0-edge2', 'edge0-edge1', 'edge1-edge3','edge1-edge2'], no:num, Color:'brown', Upgrades:'', Value:0, Rotated:0})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'C11', Owner:'GAME', Connections:['edge0-sC-edge3', 'edge2-sC-edge5','edge0-sC-edge5','edge3-sC-edge2','edge3-sC-edge5','edge0-sC-edge2'], no:num, Color:'brown', Upgrades:'', Value:10, Rotated:0})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'C12', Owner:'GAME', Connections:['edge0-sC-edge3', 'edge1-sC-edge5','edge0-sC-edge5','edge0-sC-edge1','edge3-sC-edge5','edge3-sC-edge1'], no:num, Color:'brown', Upgrades:'', Value:10, Rotated:0})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'C13', Owner:'GAME', Connections:['edge0-sC-edge1', 'edge1-sC-edge2','edge2-sC-edge3','edge0-sC-edge2','edge1-sC-edge3','edge0-sC-edge3'], no:num, Color:'brown', Upgrades:'', Value:10, Rotated:0})};
for (let num=0;num<2;num++) {tiles_1830.addTrackTile({Id:'C15', Owner:'GAME', Connections:['edge0-bC-bC-edge3', 'edge2-bC-bC-edge5','edge1-bC-bC-edge4','edge0-bC-bC-edge1','edge1-bC-bC-edge2','edge2-bC-bC-edge3', 'edge3-bC-bC-edge4', 'edge4-bC-bC-edge5', 'edge5-bC-bC-edge0','edge0-bC-bC-edge2','edge2-bC-bC-edge4', 'edge4-bC-bC-edge0'], no:num, Color:'brown', Upgrades:'D4', Value:40, Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'oo1', Owner:'GAME', Connections:['edge1-bC1-edge2', 'edge4-bC2-edge5'], no:num, Color:'green', Upgrades:'oo10,oo11,oo12,oo13,oo14,oo15,oo16,oo17', Value:40, DesignatedHex:'H18', Rotated:0})};
for (let num=0;num<2;num++) {tiles_1830.addTrackTile({Id:'oo2', Owner:'GAME', Connections:['edge2-bC1', 'edge4-bC2'], no:num, Color:'green', Upgrades:'oo10,oo11,oo12,oo13,oo14,oo15,oo16,oo17', Value:40, DesignatedHex:'H18', Rotated:0})};
// for (let num=0;num<3;num++) {tiles_1830.addTrackTile({Id:'oo2', Owner:'GAME', Connections:['edge2-bC1', 'edge4-bC2'], no:num, Color:'green', Upgrades:'oo10,oo11,oo12,oo13,oo14,oo15,oo16,oo17', Value:40, DesignatedHex:'H18', Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'oo10', Owner:'GAME', Connections:['edge0-bC1-edge3', 'edge1-bC2-edge4'], no:num, Color:'brown', Upgrades:'oo20', Value:50, DesignatedHex:'H18', Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'oo11', Owner:'GAME', Connections:['edge0-bC1-edge3', 'edge0-bC2-edge5','edge0-edge1'], no:num, Color:'brown', Upgrades:'oo20', Value:50, DesignatedHex:'H18', Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'oo12', Owner:'GAME', Connections:['edge0-bC1-edge3', 'edge1-bC2-edge2'], no:num, Color:'brown', Upgrades:'oo20', Value:50, DesignatedHex:'H18', Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'oo13', Owner:'GAME', Connections:['edge0-bC1-edge2', 'edge3-bC2-edge5'], no:num, Color:'brown', Upgrades:'oo20', Value:50, DesignatedHex:'H18', Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'oo14', Owner:'GAME', Connections:['edge3-bC1-edge5', 'edge2-bC2-edge4'], no:num, Color:'brown', Upgrades:'oo20', Value:50, DesignatedHex:'H18', Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'oo15', Owner:'GAME', Connections:['edge3-bC1-edge5', 'edge1-bC2-edge2'], no:num, Color:'brown', Upgrades:'oo20', Value:50, DesignatedHex:'H18', Rotated:0})};
for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'oo16', Owner:'GAME', Connections:['edge0-bC1-edge1', 'edge3-bC2-edge5'], no:num, Color:'brown', Upgrades:'oo20', Value:50, DesignatedHex:'H18', Rotated:0})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'oo17', Owner:'GAME', Connections:['edge0-bC1-edge5', 'edge1-bC2-edge2'], no:num, Color:'brown', Upgrades:'oo20', Value:50, DesignatedHex:'H18', Rotated:0})};
// for (let num=0;num<1;num++) {tiles_1830.addTrackTile({Id:'oo20', Owner:'GAME', Connections:['edge3-bC1', 'edge4-bC2','edge0-bC1-edge5','edge1-bC2-edge2','edge1-bC2-edge4','edge2-bC2-edge4','edge0-bC1-edge3','edge5-bC1-edge3'], no:num, Color:'grey', Upgrades:'oo20', Value:70, DesignatedHex:'H18', Rotated:0})};
// for (let num=0;num<2;num++) {tiles_1830.addTrackTile({Id:'D4', Owner:'GAME', Connections:['edge0-bC-bC-bC-edge3', 'edge2-bC-bC-bC-edge5','edge1-bC-bC-bC-edge4','edge0-bC-bC-bC-edge1','edge1-bC-bC-bC-edge2','edge2-bC-bC-bC-edge3', 'edge3-bC-bC-bC-edge4', 'edge4-bC-bC-bC-edge5', 'edge5-bC-bC-bC-edge0','edge0-bC-bC-bC-edge2','edge2-bC-bC-bC-edge4', 'edge4-bC-bC-bC-edge0'], no:num, Color:'grey', Upgrades:'', Value:60, Rotated:0})};



module.exports = {Tiles1830:tiles_1830};