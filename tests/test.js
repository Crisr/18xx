const test = require('tape');
const CB = require('../Core/core_bit');
const Pawn = require('../Core/core_Pawn');
const Finance = require('../Core/core_finance');
const Map1830 = require('../1830/1830Map').Map1830;
const TrackTiles1830 = require('../1830/tiles1830.js').Tiles1830;

test('Core Bit tests', function (TC) {        
        const CBit = new CB();  
        const myPawn = new Pawn('Cris');        
        TC.equal(typeof(CBit.GetLocation()), "object", "Should be an Object");
        TC.equal(typeof(CBit.SetAIValue(2)), "undefined", "Error, value 2 is not valid, 0..1 is valid");
        TC.equal(CBit.GetAIValue(CBit.SetAIValue(0.5)), CBit.GetAIValue(), 'Set and Get AI values should be equal')
        TC.end();
});

test('Finance tests', function (TC) {        
        const myBank = new Finance.Bank();      
        const Bills5 = myBank.createBills(`TEST`, 5, 1);
        
        TC.equal(Object.prototype.toString.call( Bills5 ), "[object Array]", "Bills5 should be an array");
        myBank.addBills2Bank(Bills5);        
        myBank.addBills2Bank(myBank.createBills(`TEST`, 10, 1));
        myBank.addBills2Bank(myBank.createBills(`Player1`, 10, 1));

        const TESTBills = myBank.getBankHoldings('TEST');
        TC.equal(Object.prototype.toString.call(TESTBills), "[object Array]", "getBankHoldings('TEST') should be an array");   
        TC.end();
});

test('Map  tests', function (TC) {
        let HMap = Map1830.get1830Map();
        let TrackTiles = TrackTiles1830.get1830TrackTiles();
        const Tile =  Map1830.getHexByIndex(HMap,0);

        TC.equal(typeof(Tile.getId()), "string", "Tile.GetId() should return a string");
        TC.equal(typeof(Tile.getNumPos()), "object", "Tile.getNumPos() should return an object");
        TC.equal(typeof(Map1830.getHexById(HMap, 'I1')), "object", "Map1830.getTileById should return an object");
        TC.equal(Map1830.getNeighbors(HMap, Map1830.getHexById(HMap, 'F12')).length, 6, "F12 map hex should have 6 neighbours");
        TC.equal(Map1830.getNeighbors(HMap, Map1830.getHexById(HMap, 'C7')).length, 3, "C7  map hex should have 3 neighbours");
        TC.equal(Map1830.getNeighbors(HMap, Map1830.getHexById(HMap, 'E3')).length, 5, "E3  map hex should have 5 neighbours");
        TC.end();
});