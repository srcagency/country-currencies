'use strict';

const test = require('tape');
const pairs = require('./');

test(function( t ){
	t.ok(Array.isArray(pairs));
	t.equal(pairs.length, 249);

	t.ok(pairs.byCountry() instanceof Map);

	t.deepEqual(pairs.byCountry().get('DK'), 'DKK');

	t.end();
});
