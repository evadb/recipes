'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _casual = require('casual');

var _casual2 = _interopRequireDefault(_casual);

var _graphqlTools = require('graphql-tools');

var _randexp = require('randexp');

var _randexp2 = _interopRequireDefault(_randexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

	Query: function Query() {
		return {
			evaluations: function evaluations() {
				return new _graphqlTools.MockList([1, 7]);
			}
		};
	},

	Evaluation: function Evaluation() {
		return {
			yearBuilt: function yearBuilt() {
				return _casual2.default.integer(1900, 2010);
			},
			floorArea: function floorArea() {
				return _casual2.default.integer(700, 3000) + " sq ft";
			},
			footprint: function footprint() {
				return _casual2.default.integer(0, 300) + " GJ/Year";
			},
			furnaceType: function furnaceType() {
				return _casual2.default.word;
			},
			furnaceFuel: function furnaceFuel() {
				return _casual2.default.word;
			},
			address: function address() {
				return _casual2.default.address1;
			},
			latitude: function latitude() {
				return _casual2.default.latitude;
			},
			longitude: function longitude() {
				return _casual2.default.longitude;
			}
		};
	}
};