'use strict'
const log = require('winston');

class Hex {
    constructor ()
    {
        // vertexes start with top-most one (North) as vertex0 and continues clockwise
        Vertexes: ['vertex0', 'vertex1', 'vertex2', 'vertex3', 'vertex4', 'vertex5'];
        // edge0 = vertex0-vertex1, edge1 = vertex1-vertex2, edge2 = vertex2-vertex3, edge3 = vertex3-vertex4, edge4 = vertex4-vertex5, edge5 = vertex5-vertex0
        Edges: ['edge0', 'edge1', 'edge2', 'edge3', 'edge4', 'edge5'];
        // array of objects describing other hex attributes (NOT items placed on top of the Hex)
        Contents: [];
    }
}

module.exports = {Hex:Hex};