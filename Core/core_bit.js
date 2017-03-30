'use strict'
module.exports = function CBit() {       
    this.Location = {};
    this.previousLocation = {};    

    this.GetLocation = function() {return this.Location};
    this.SetLocation = function(s) {this.Location = s};
    this.GetPreviousLocation= function() {return this.previousLocation};
   
} 