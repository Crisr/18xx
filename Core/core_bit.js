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
    
    SetLocation (s) {
   /**
    * @param {string}  s - An object param.
    */
        this.Location = s}    
   
    GetPreviousLocation () {return this.previousLocation}

    // AI related functions
    SetAIValue(v) {this.AIValue = s}


    printInfo () {
        for (let vname in this) {
         console.log(`[${this.constructor.name}] ${vname}`);
        }
    }
   
} 

module.exports = CBit;