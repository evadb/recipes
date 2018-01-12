'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _apolloServerExpress = require('apollo-server-express');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _schema = require('./schema');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = 3001;

var server = (0, _express2.default)();

server.use('*', (0, _cors2.default)({ origin: 'http://localhost:3000' }));

server.use('/graphql', _bodyParser2.default.json(), (0, _apolloServerExpress.graphqlExpress)({
	schema: _schema.schema
}));

server.get('/graphiql', (0, _apolloServerExpress.graphiqlExpress)({
	endpointURL: '/graphql'
}));

server.listen(PORT);