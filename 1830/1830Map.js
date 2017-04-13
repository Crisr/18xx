'use strict'
const log = require('winston');
const Hex = require('../Core/core_hex').Hex;
const _= require('underscore');

class MapHex  {
    constructor () {
        this.Map1830 = [];
    }
    /**
     * 
     * 
     * @param {Object} o Id: String,  Pos:String Axial Map Coords, 'x,y'
     * 
     * @memberOf MapHex
     */
    addTile (o) {
        this.Map1830.push(o);
    }
    /**
     * 
     * 
     * @param {Number} index array index
     * @returns 
     * 
     * @memberOf MapHex
     */
    getHexByIndex(index) {return this.Map1830[index]}

    /**
     * 
     * 
     * @param {String} i the Id of the hex
     * @returns Hex object
     * 
     * @memberOf MapHex
     */
    getHexById (i) {
        return _.find(this.Map1830, a => {
            return a.getContents().Id == i }
            )
    }

    getNeighbors (h) {
        let directions = [{x:1,y:0}, {x:1,y:-1}, {x:0,y:-1},{x:-1,y:0},{x:-1,y:1}, {x:0,y:1}];
        let hexCoords = h.getNumPos();
        let neighbors = [];

        directions.forEach( d => {
            this.Map1830.forEach (mh => {
                if  ((mh.getNumPos().x == hexCoords.x+d.x) & (mh.getNumPos().y == hexCoords.y+d.y)) {neighbors.push(mh)};
            })
        })
        return neighbors;
    }
}



const map_1830 = new MapHex();
// Start Axial Coordinates beginning with H2 (0,0), decrease as it goes up, increase as it goes right
// http://www.redblobgames.com/grids/hexagons/  -  pointy topped

map_1830.addTile(new Hex({Id:'I1', Pos:'-2,1'}));
map_1830.addTile(new Hex({Id:'J2', Pos:'-2,2'}));

map_1830.addTile(new Hex({Id:'H2', Pos:'0,0'}));
map_1830.addTile(new Hex({Id:'I3', Pos:'0,1'}));
map_1830.addTile(new Hex({Id:'J4', Pos:'0,2'}));

map_1830.addTile(new Hex({Id:'H4', Pos:'1,0'}));
map_1830.addTile(new Hex({Id:'G3', Pos:'1,-1'}));
map_1830.addTile(new Hex({Id:'F2', Pos:'1,-2'}));
map_1830.addTile(new Hex({Id:'I5', Pos:'1,1'}));
map_1830.addTile(new Hex({Id:'J6', Pos:'1,2'}));

map_1830.addTile(new Hex({Id:'H6', Pos:'2,0'}));
map_1830.addTile(new Hex({Id:'G5', Pos:'2,-1'}));
map_1830.addTile(new Hex({Id:'F4', Pos:'2,-2'}));
map_1830.addTile(new Hex({Id:'E3', Pos:'2,-3'}));
map_1830.addTile(new Hex({Id:'D2', Pos:'2,-4'}));
map_1830.addTile(new Hex({Id:'I7', Pos:'2,1'}));
map_1830.addTile(new Hex({Id:'J8', Pos:'2,2'}));

map_1830.addTile(new Hex({Id:'H8', Pos:'3,0'}));
map_1830.addTile(new Hex({Id:'G7', Pos:'3,-1'}));
map_1830.addTile(new Hex({Id:'F6', Pos:'3,-2'}));
map_1830.addTile(new Hex({Id:'E5', Pos:'3,-3'}));
map_1830.addTile(new Hex({Id:'D4', Pos:'3,-4'}));
map_1830.addTile(new Hex({Id:'I9', Pos:'3,1'}));
map_1830.addTile(new Hex({Id:'J10', Pos:'3,2'}));

map_1830.addTile(new Hex({Id:'H10', Pos:'4,0'}));
map_1830.addTile(new Hex({Id:'G9', Pos:'4,-1'}));
map_1830.addTile(new Hex({Id:'F8', Pos:'4,-2'}));
map_1830.addTile(new Hex({Id:'E7', Pos:'4,-3'}));
map_1830.addTile(new Hex({Id:'D6', Pos:'4,-4'}));
map_1830.addTile(new Hex({Id:'I11', Pos:'4,1'}));
map_1830.addTile(new Hex({Id:'J12', Pos:'4,2'}));
map_1830.addTile(new Hex({Id:'K13', Pos:'4,3'}));

map_1830.addTile(new Hex({Id:'H12', Pos:'5,0'}));
map_1830.addTile(new Hex({Id:'G11', Pos:'5,-1'}));
map_1830.addTile(new Hex({Id:'F10', Pos:'5,-2'}));
map_1830.addTile(new Hex({Id:'E9', Pos:'5,-3'}));
map_1830.addTile(new Hex({Id:'D8', Pos:'5,-4'}));
map_1830.addTile(new Hex({Id:'C7', Pos:'5,-5'}));
map_1830.addTile(new Hex({Id:'I13', Pos:'5,1'}));
map_1830.addTile(new Hex({Id:'J14', Pos:'5,2'}));
map_1830.addTile(new Hex({Id:'K15', Pos:'5,3'}));

map_1830.addTile(new Hex({Id:'H14', Pos:'6,0'}));
map_1830.addTile(new Hex({Id:'G13', Pos:'6,-1'}));
map_1830.addTile(new Hex({Id:'F12', Pos:'6,-2'}));
map_1830.addTile(new Hex({Id:'E11', Pos:'6,-3'}));
map_1830.addTile(new Hex({Id:'D10', Pos:'6,-4'}));
map_1830.addTile(new Hex({Id:'C9', Pos:'6,-5'}));
map_1830.addTile(new Hex({Id:'I15', Pos:'6,1'}));

map_1830.addTile(new Hex({Id:'H16', Pos:'7,0'}));
map_1830.addTile(new Hex({Id:'G15', Pos:'7,-1'}));
map_1830.addTile(new Hex({Id:'F14', Pos:'7,-2'}));
map_1830.addTile(new Hex({Id:'E13', Pos:'7,-3'}));
map_1830.addTile(new Hex({Id:'D12', Pos:'7,-4'}));
map_1830.addTile(new Hex({Id:'C11', Pos:'7,-5'}));
map_1830.addTile(new Hex({Id:'B10', Pos:'7,-6'}));
map_1830.addTile(new Hex({Id:'A9', Pos:'7,-7'}));
map_1830.addTile(new Hex({Id:'I17', Pos:'7,1'}));

map_1830.addTile(new Hex({Id:'H18', Pos:'8,0'}));
map_1830.addTile(new Hex({Id:'G17', Pos:'8,-1'}));
map_1830.addTile(new Hex({Id:'F16', Pos:'8,-2'}));
map_1830.addTile(new Hex({Id:'E15', Pos:'8,-3'}));
map_1830.addTile(new Hex({Id:'D14', Pos:'8,-4'}));
map_1830.addTile(new Hex({Id:'C13', Pos:'8,-5'}));
map_1830.addTile(new Hex({Id:'B12', Pos:'8,-6'}));
map_1830.addTile(new Hex({Id:'A11', Pos:'8,-7'}));
map_1830.addTile(new Hex({Id:'I19', Pos:'8,1'}));

map_1830.addTile(new Hex({Id:'H20', Pos:'9,0'}));
map_1830.addTile(new Hex({Id:'G19', Pos:'9,-1'}));
map_1830.addTile(new Hex({Id:'F18', Pos:'9,-2'}));
map_1830.addTile(new Hex({Id:'E17', Pos:'9,-3'}));
map_1830.addTile(new Hex({Id:'D16', Pos:'9,-4'}));
map_1830.addTile(new Hex({Id:'C15', Pos:'9,-5'}));
map_1830.addTile(new Hex({Id:'B14', Pos:'9,-6'}));

// map_1830.addTile(new Hex({Id:'H22', Pos:'10,0'}));
map_1830.addTile(new Hex({Id:'F20', Pos:'10,-2'}));
map_1830.addTile(new Hex({Id:'E19', Pos:'10,-3'}));
map_1830.addTile(new Hex({Id:'D18', Pos:'10,-4'}));
map_1830.addTile(new Hex({Id:'C17', Pos:'10,-5'}));
map_1830.addTile(new Hex({Id:'B16', Pos:'10,-6'}));

// map_1830.addTile(new Hex({Id:'H24', Pos:'11,0'}));
map_1830.addTile(new Hex({Id:'F22', Pos:'11,-2'}));
map_1830.addTile(new Hex({Id:'E21', Pos:'11,-3'}));
map_1830.addTile(new Hex({Id:'D20', Pos:'11,-4'}));
map_1830.addTile(new Hex({Id:'C19', Pos:'11,-5'}));
map_1830.addTile(new Hex({Id:'B18', Pos:'11,-6'}));
map_1830.addTile(new Hex({Id:'A17', Pos:'11,-7'}));

// map_1830.addTile(new Hex({Id:'H26', Pos:'12,0'}));
map_1830.addTile(new Hex({Id:'F24', Pos:'12,-2'}));
map_1830.addTile(new Hex({Id:'E23', Pos:'12,-3'}));
map_1830.addTile(new Hex({Id:'D22', Pos:'12,-4'}));
map_1830.addTile(new Hex({Id:'C21', Pos:'12,-5'}));
map_1830.addTile(new Hex({Id:'B20', Pos:'12,-6'}));
map_1830.addTile(new Hex({Id:'A19', Pos:'12,-7'}));

// map_1830.addTile(new Hex({Id:'H28', Pos:'13,0'}));
map_1830.addTile(new Hex({Id:'D24', Pos:'13,-4'}));
map_1830.addTile(new Hex({Id:'C23', Pos:'13,-5'}));
map_1830.addTile(new Hex({Id:'B22', Pos:'13,-6'}));

map_1830.addTile(new Hex({Id:'B24', Pos:'14,-6'}));


module.exports = {Map1830:map_1830};