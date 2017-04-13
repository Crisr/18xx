'use strict'
const log = require('winston');

/**
 * @param Id {String} i unique ID, ussually map index
 * @param Pos: [String] 'x,y' - axial coordinates
 * 
 * @class Hex
 */
class Hex {
    constructor (HexParams)
    {       
        // vertexes start with top-most one (North) as vertex0 and continues clockwise
        this.Vertexes = ['vertex0', 'vertex1', 'vertex2', 'vertex3', 'vertex4', 'vertex5'];
        // edge0 = vertex0-vertex1, edge1 = vertex1-vertex2, edge2 = vertex2-vertex3, edge3 = vertex3-vertex4, edge4 = vertex4-vertex5, edge5 = vertex5-vertex0
        this.Edges = ['edge0', 'edge1', 'edge2', 'edge3', 'edge4', 'edge5'];
        // array of objects describing other hex attributes (NOT items placed on top of the Hex)
        this.Contents = HexParams;
    }
    
    /**
     * Returns this.Vertexes[n]
     * 
     * @param {Number} n between 1-6
     * @returns {String} Vertex id
     * 
     * @memberOf Hex
     */
    getVertex (n) {if (isNaN(n) || n<0 || n>5) {return log.error(`${n} should be between 0-5`)} 
        else 
        return this.Vertexes[n]
    }
    

    getEdge (n) {if (isNaN(n) || n<0 || n>5) {return log.error(`${n} should be between 0-5`)} 
        else
        {return this.Edges[n]}
    }

    /**
     * 
     * 
     * @returns [Object] all initialisation parameters
     * 
     * @memberOf Hex
     */
    getContents ()  {return this.Contents}

    /**
     * 
     * 
     * @returns [String] Id of the hex
     * 
     * @memberOf Hex
     */
    getId () {return this.Contents.Id}

    /**
     * Method returns the numerical Pos {x,y} values
     * 
     * @returns [Object] {x,y} where x, y are Numbers
     * 
     * @memberOf Hex
     */
    getNumPos () {
        if (this.Contents.Pos == 'undefined') {return log.error(`${this.getId()} doesn't have a Pos defined'`)};
        return {x: Number(this.Contents.Pos.split(',')[0]), y: Number(this.Contents.Pos.split(',')[1])};
    }

}

module.exports = {Hex:Hex};