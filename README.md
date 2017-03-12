# A map of countries' currency

A map of all [ISO 3166-1 (country) alpha2 codes](https://en.wikipedia.org/wiki/ISO_3166-1)
to an [ISO 4217 currency code](https://en.wikipedia.org/wiki/ISO_4217).

See also:

- [ISO 3166-1 codes repository](https://github.com/srcagency/iso-3166-1-codes)

```js
const currencies = require('country-currency');

console.log(currencies.map(c => c.country+', '+c.currency));
	// AD, EUR
	// …


// export a Map
byCountry()

const byCountry = currencies.byCountry();

byCountry.has('DK');
	// true

byCountry.get('DK');
	// DKK
```
