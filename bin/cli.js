#!/usr/bin/env node

const fs = require('fs');
const parser = require('fast-xml-parser');
const jsonSum = require('json-summary');
const xmlSummary = require('../src');

let fn = process.argv[2];
if (!fn) {
	console.log(`${process.argv[1]} file.xml [options]`);
	console.log('\nOptions:\n');
	console.log('  --attrs      Include attributes in summary');
	console.log('  --values     Include example values');
	console.log('  --json       Output as parsable JSON string (TODO)');
	process.exit(1);
}

const withAttrs = process.argv.includes('--attrs');
const withExamples = process.argv.includes('--values');
const asJson = process.argv.includes('--json');

xmlSummary(fn, {
	ignoreAttributes: !withAttrs,
	showExampleValue: withExamples,
	asText: !asJson,
	asJson: asJson,
})
.then(res => {
	console.log(res);
	process.exit(0);
})
.catch(err => {
	console.error(err);
	process.exit(1);
});
