'use strict'
var cBit = require('./core_bit.js')

function cPawn(o) {
    this.pColor         = "white";    
    this.Owner          = o !== undefined ? o : 'AI';
    this.previousOwner  = '';
   
    return {
        GetColor: function () {return pColor},
        SetColor: function (s) {pColor = s}
    }
}
