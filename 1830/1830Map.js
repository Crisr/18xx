'use strict'
const log = require('winston');
const HexExp = require('../Core/core_hex');

class MapHex extends HexExp.Hex {
    constructor (hexParam) {
        super(hexParam);

    }
}

module.exports = {HexExp:MapHex};