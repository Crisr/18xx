'use strict'
class CBit {       
    constructor () {
        this.Location = {};
        this.previousLocation = {};    
        }
    
    GetLocation () {return this.Location}
    
    SetLocation (s) {this.Location = s}
    
    GetPreviousLocation () {return this.previousLocation}
   
} 

module.exports = CBit;