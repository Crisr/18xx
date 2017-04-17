'use strict'
const log = require('winston');
const Hex = require('../Core/core_hex').Hex;
const MapH =require('../Core/core_hex').HexMap;
const _= require('underscore');

class MapHex extends MapH  {
    constructor () {
        super();
        this.Map1830 =[];
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
    };

  get1830Map() {return this.Map1830};
}



const map_1830 = new MapHex();
// Start Axial Coordinates beginning with H2 (0,0), decrease as it goes up, increase as it goes right
// http://www.redblobgames.com/grids/hexagons/  -  pointy topped

map_1830.addTile(new Hex({Id:'I1', Pos:'-2,1', Color:'Red', Revenue:'30,60', Connections:['edge1']}));
map_1830.addTile(new Hex({Id:'J2', Pos:'-2,2', Color:'Red', Revenue:'30,60', Connections:['edge0','edge1']}));

map_1830.addTile(new Hex({Id:'H2', Pos:'0,0', Color:'Tan', Blocked:['edge3','edge4','edge5']}));
map_1830.addTile(new Hex({Id:'I3', Pos:'0,1', Color:'Tan'}));
map_1830.addTile(new Hex({Id:'J4', Pos:'0,2', Color:'Tan', Blocked:['edge3','edge4']}));

map_1830.addTile(new Hex({Id:'H4', Pos:'1,0', Color:'Tan', Cities:'bC'}));
map_1830.addTile(new Hex({Id:'G3', Pos:'1,-1', Color:'Tan', Blocked:['edge4']}));
map_1830.addTile(new Hex({Id:'F2', Pos:'1,-2', Color:'Red', Revenue:'40,70', Connections:['edge0','edge1','edge2']}));
map_1830.addTile(new Hex({Id:'I5', Pos:'1,1', Color:'Tan'}));
map_1830.addTile(new Hex({Id:'J6', Pos:'1,2', Color:'Tan', Blocked:['edge3', 'edge4']}));

map_1830.addTile(new Hex({Id:'H6', Pos:'2,0', Color:'Tan'}));
map_1830.addTile(new Hex({Id:'G5', Pos:'2,-1', Color:'Tan'}));
map_1830.addTile(new Hex({Id:'F4', Pos:'2,-2', Color:'Tan', Cost:'80', Cities:'bC', Blocked:['edge1'], Split:'edge0-edge1'}));
map_1830.addTile(new Hex({Id:'E3', Pos:'2,-3', Color:'Tan', Blocked:['edge4']}));
map_1830.addTile(new Hex({Id:'D2', Pos:'2,-4', Color:'Grey', Revenue:'20', Connections:['edge1-bC-edge2'], Cities:'bC'}));
map_1830.addTile(new Hex({Id:'I7', Pos:'2,1', Color:'Tan'}));
map_1830.addTile(new Hex({Id:'J8', Pos:'2,2', Color:'Tan', Blocked:['edge3','edge4']}));

map_1830.addTile(new Hex({Id:'H8', Pos:'3,0', Color:'Tan'}));
map_1830.addTile(new Hex({Id:'G7', Pos:'3,-1', Color:'Tan', Cities:'sC,sC'}));
map_1830.addTile(new Hex({Id:'F6', Pos:'3,-2', Color:'Grey', Revenue:'30', Connections:['edge2-bC-edge3'], Cities:'bC(C&O)'}));
map_1830.addTile(new Hex({Id:'E5', Pos:'3,-3', Color:'Yellow', Cost:'80', Cities:'bC#edge4, bC#edge1', Split:'edge0-edge3', PrivateCo:'OO'}));
map_1830.addTile(new Hex({Id:'D4', Pos:'3,-4', Color:'Tan', Cities:'sC', Blocked:['edge0', 'edge5']}));
map_1830.addTile(new Hex({Id:'I9', Pos:'3,1', Color:'Tan'}));
map_1830.addTile(new Hex({Id:'J10', Pos:'3,2', Color:'Tan', Feature:'Mountain', Cost:'120', Blocked:['edge2','edge3']}));

map_1830.addTile(new Hex({Id:'H10', Pos:'4,0', Color:'Tan', Cities:'bC'}));
map_1830.addTile(new Hex({Id:'G9', Pos:'4,-1', Color:'Tan'}));
map_1830.addTile(new Hex({Id:'F8', Pos:'4,-2', Color:'Tan', Split:'edge1-edge4', Blocked:['edge0','edge5']}));
map_1830.addTile(new Hex({Id:'E7', Pos:'4,-3', Color:'Tan', Cities:'sC', Split:'edge1-vertex4', Blocked:['edge2','edge3']}));
map_1830.addTile(new Hex({Id:'D6', Pos:'4,-4', Color:'Tan', Cost:'80', Split:'edge0-edge3', Blocked:['edge0','edge5']}));
map_1830.addTile(new Hex({Id:'I11', Pos:'4,1', Color:'Tan', Feature:'Mountain', Cost:'120'}));
map_1830.addTile(new Hex({Id:'J12', Pos:'4,2', Color:'Tan', Feature:'Mountain', Cost:'120', Blocked:['edge3']}));
map_1830.addTile(new Hex({Id:'K13', Pos:'4,3', Color:'Red', Revenue:'30,40', Connections:['edge0','edge5']}));

map_1830.addTile(new Hex({Id:'H12', Pos:'5,0', Color:'Grey', Revenue:'10', Cities:'bC(B&R)', Connections:['edge1-bC-edge4','edge1-edge4']}));
map_1830.addTile(new Hex({Id:'G11', Pos:'5,-1', Color:'Tan'}));
map_1830.addTile(new Hex({Id:'F10', Pos:'5,-2', Color:'Tan', Cities:'sC', Blocked:['edge5']}));
map_1830.addTile(new Hex({Id:'E9', Pos:'5,-3', Color:'Grey', Connections:['edge0-edge5'], Split:'vertex1-edge4'}));
map_1830.addTile(new Hex({Id:'D8', Pos:'5,-4', Color:'Tan'}));
map_1830.addTile(new Hex({Id:'C7', Pos:'5,-5', Color:'Tan', Blocked:['edge3','edge4', 'edge5', 'edge0']}));
map_1830.addTile(new Hex({Id:'I13', Pos:'5,1', Color:'Tan', PrivateTrack:'B&O'}));
map_1830.addTile(new Hex({Id:'J14', Pos:'5,2', Color:'Tan', Cities:'bC#edge0', Blocked:['edge1'], Split:'edge5-vertex2'}));
map_1830.addTile(new Hex({Id:'K15', Pos:'5,3', Color:'Grey', Cities:'bC#edge0', Revenue:'20', Connections:['edge5-bC']}));

map_1830.addTile(new Hex({Id:'H14', Pos:'6,0', Color:'Tan'}));
map_1830.addTile(new Hex({Id:'G13', Pos:'6,-1', Color:'Tan', Feature:'Mountain', Cost:'120'}));
map_1830.addTile(new Hex({Id:'F12', Pos:'6,-2', Color:'Tan'}));
map_1830.addTile(new Hex({Id:'E11', Pos:'6,-3', Color:'Yellow', Cities:'bC#edge0, bC#edge3', Blocked:['edge4', 'edge5'], HexOwner:'ERIE', PrivateCo:'OO'}));
map_1830.addTile(new Hex({Id:'D10', Pos:'6,-4', Color:'Yellow', Cities:'bC#edge5, bC#edge3', Revenue:'80', Split:'vertex1-edge4', PrivateCo:'OO'}));
map_1830.addTile(new Hex({Id:'C9', Pos:'6,-5', Color:'Tan', Blocked:['edge5']}));
map_1830.addTile(new Hex({Id:'I15', Pos:'6,1', Color:'Yellow', Cities:'bC(B&O)', Revenue:'30', Connections:['edge1-bC(B&O)-edge3'], PrivateTrack:'B&O', Blocked:['edge2']}));

map_1830.addTile(new Hex({Id:'H16', Pos:'7,0', Color:'Tan', Cities:'bC'}));
map_1830.addTile(new Hex({Id:'G15', Pos:'7,-1', Color:'Tan', Feature:'Mountain', Cost:'120', PrivateTrack:'SV'}));
map_1830.addTile(new Hex({Id:'F14', Pos:'7,-2', Color:'Tan'}));
map_1830.addTile(new Hex({Id:'E13', Pos:'7,-3', Color:'Tan'}));
map_1830.addTile(new Hex({Id:'D12', Pos:'7,-4', Color:'Tan', Blocked:['edge0', 'edge5']}));
map_1830.addTile(new Hex({Id:'C11', Pos:'7,-5', Color:'Tan', Blocked:['edge3']}));
map_1830.addTile(new Hex({Id:'B10', Pos:'7,-6', Color:'Tan', Cities:'bC', Blocked:['edge4']}));
map_1830.addTile(new Hex({Id:'A9', Pos:'7,-7', Color:'Red', Revenue:'30,50', Connections:['edge0','edge5']}));
map_1830.addTile(new Hex({Id:'I17', Pos:'7,1', Color:'Tan', Blocked:['edge2'], Cost:'80', Split:'vertex0-edge2'}));

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