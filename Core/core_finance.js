// Finance boardgame bits
const cBit = require('./core_bit.js');

class Bill extends cBit {
    constructor(bill_value) {
        super();
        if (isNaN(bill_value)==true) {return console.log(`Bill Value must be a number`)}
        this.billVal = bill_value;
    }

    generateBill () {
        return {"Value": this.billVal}
    }
}

class Bank extends Bill {
    constructor() {
        super();
        this.BankVault = []
    }

    addBills (n, billfunc) {
        arr = [];
        for (let i=0; i<n; i++) {
            arr.push(billfunc);
        }
        return arr
    }
}

module.exports = Bank;
