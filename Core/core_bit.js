'use strict'
class CBit {       
    constructor () {        
        this.Location = {};
        this.previousLocation = {};    
        }
    
    GetLocation () {return this.Location}
    
    SetLocation (s) {this.Location = s}
    
    GetPreviousLocation () {return this.previousLocation}

    printInfo () {
        for (let vname in this) {
         console.log(`[${this.constructor.name}] ${vname}`);
        }
    }
   
} 

module.exports = CBit;