const fs = require('fs');
const dict = require('./dictionary').dictionary;
const textPath = './usecases-1-2-3-test';

function entryToAcctNum(entry) {
	const rows = entry.split('\n');
	let result = [];

	rows.forEach( row => {
		const parts = row.match(/.{1,3}/g);

		parts.forEach( (part, i) => {
			if (!result[i]) {
				result[i] = part;
			} else {
				result[i] += part;
			}
		});
	});

	return result.map( num => {
		return Object.keys(dict).includes(num) ? dict[num] : '?';
	});
}

function isValidAcctNum(account) {
	const accountLength = account.length;
	let result = 0;

	for (let i = accountLength - 1, k = 1; i > 0, k <= accountLength; i--, k++) {
		result += k * account[i];
	}

	return result % 11 === 0;
}

function display(account, isValid) {
	let status = '';

	if (!isValid) {
		status = account.includes('?') ? ' ILL' : ' ERR';
	}

	return `${account.join('')}${status}`;
}

fs.readFile(`${textPath}${'.txt'}`, 'utf8', (err, data) => {
	if (err) throw err;

	const entries = data.split('\n\n');

	console.log('Starting to read numbers...');
	entries.forEach( entry => {
		if (!entry.trim()) return '';

		console.log(entry);

		const account = entryToAcctNum(entry);
		const isValid = isValidAcctNum(account);
		const displayResults = display(account, isValid);

		try {
			fs.appendFileSync(`${textPath}${'-results.txt'}`, `${displayResults}${'\n'}`);
			console.log(displayResults);
		} catch (err) {
			throw err;
		}

	});

	console.log('All done!');
});
