// Finance boardgame bits
const cBit = require('./core_bit.js');
const log = require('winston');

class Bill extends cBit {
    /**
     * Creates an instance of Bill.
     * @param {string} o Owner of the bill
     * @param {Number} bill_value Bill value
     * 
     * @memberOf Bill
     */
    constructor(o, bill_value) {
        super();
        if (isNaN(bill_value)==true) {return log.error(`Bill Value must be a number`)}
        if (arguments.length<2) {return log.error('Bill constructor must have 2 parameters')}
        this.billVal        = bill_value;       
        this.Owner          = (typeof o !== 'undefined') ?  o : 'GAME';      
    }

    static generateBill () {
        return {"Value": this.billVal}
    }
}

class Bank extends cBit {
    constructor() {
        super();
        this.BankVault = [];        
    }

    /**
     * Adds number of bills of specified value to an array
     * 
     * @param {string} o Owner of the bills
     * @param {Number} no Number of bills
     * @param {Number} val Value of any of the generated bills
     * @returns {array} An array of Bill objsects
     * 
     * @memberOf Bank
     */
    createBills (o='GAME', no, val) {
        let arr = [];  
        o = (typeof o !== 'undefined') ?  o : 'GAME';        
        if (isNaN(no)==true) {return log.error('Bank.addBills must have number of bills specified')}
        for (let i=0; i<no; i++) {
            let newBill = new Bill(o,val);
            arr.push(newBill);
        }
        return arr
    }

    /**
     * Adds an array of Bills to the BankVault
     * 
     * @param {array} [barr=[]] must be an array of Bills. Use Bank.createBills
     * 
     * @memberOf Bank
     */
    addBills2Bank (barr =[]) {
        if (typeof(barr) !== 'array') {log.error('only arrays of type Bill will be added to the bank, use Bank.createBills')};
        this.BankVault.concat(barr);
    }

}

module.exports = {Bank:Bank, Bill:Bill};

