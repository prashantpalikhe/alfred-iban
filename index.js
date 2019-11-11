const alfy = require('alfy');
const buildIban = require('./iban');

const iban = buildIban(alfy.input);

alfy.output([
	{
		title: iban,
		subtitle: alfy.input,
		text: {
			copy: iban,
		},
	},
]);
