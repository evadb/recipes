'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schema = undefined;

var _graphqlTools = require('graphql-tools');

var _resolvers = require('./resolvers');

var typeDefs = '\n type Query {\n      evaluations: [Evaluation]\n    }\n    \n    type Evaluation {\n      yearBuilt: String\n      floorArea: String\n      footprint: String\n      furnaceType: String\n      furnaceFuel: String\n    }\n  ';

var schema = (0, _graphqlTools.makeExecutableSchema)({ typeDefs: typeDefs, resolvers: _resolvers.resolvers });

exports.schema = schema;