'use strict'
// object CBit is base object for all gameboard physical bits that can be put on the table. Pawns, Cards, maps, they all derive from this object
class CBit {       
    constructor () {        
        this.Location = {};
        this.previousLocation = {};
        this.AIValue = 0;
        }
    // where is this located?
    GetLocation () {return this.Location}    
    
   
    /**
     * 
     * 
     * @param {object} s - object describing the location of the boardgame bit, usually the map, hex grid, etc
     * 
     * @memberOf CBit
     */
    SetLocation (s) {
        this.Location = s}    
   
    GetPreviousLocation () {return this.previousLocation}

    
    /**
     * Sets the AI value for this boardgame piece. Between 0..1, 1 beeing the most valuable
     * 
     * @param {Number} v 
     * 
     * @memberOf CBit
     */
    SetAIValue(v) {
        if (isNaN(v) == true) {return `SetAIValue - value is not a number`};
        if (v>1 || v<0) {return `SetAIValue - value should be between 0..1`}
        this.AIValue = v
    }
    
    GetAIValue(v) {
        return this.AIValue;
    }

    /**
     * Provides basic output information for the boardgame bit
     * 
     * 
     * @memberOf CBit
     */
    getInfo () {
        let result = [];
        for (let vname in this) {
         result.push(
             {"ID":this.constructor.name, 
             "Property":vname, 
             "Value": this[vname]}
             )
        }
        return result
    }
   
} 

module.exports = CBit;