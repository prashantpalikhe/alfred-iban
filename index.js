const alfy = require('alfy');
const buildIban = require('./iban');

alfy.output([
	{
		title: buildIban(alfy.input),
		subtitle: alfy.input,
	},
]);
