'use strict';

var pairs = require('./data.json');

pairs.byCountry = byCountry;

module.exports = pairs;

var countryMap;

function byCountry( alpha2 ){
	if (countryMap === undefined)
		countryMap = new Map(pairs.map(function( pair ){
			return [ pair.country, pair.currency ];
		}));

	return countryMap;
}
