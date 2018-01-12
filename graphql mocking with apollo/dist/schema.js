'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schema = undefined;

var _graphqlTools = require('graphql-tools');

var _mocks = require('./mocks');

var _mocks2 = _interopRequireDefault(_mocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeDefs = '\n type Query {\n      evaluations: [Evaluation]\n    }\n    \n    type Evaluation {\n      yearBuilt: String\n      floorArea: String\n      footprint: String\n      furnaceType: String\n      furnaceFuel: String\n      address: String\n      latitude: String\n      longitude: String\n    }\n  ';

var schema = (0, _graphqlTools.makeExecutableSchema)({ typeDefs: typeDefs });

(0, _graphqlTools.addMockFunctionsToSchema)({
  schema: schema,
  mocks: _mocks2.default

});

exports.schema = schema;