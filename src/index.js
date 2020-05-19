const fs = require('fs');
const parser = require('fast-xml-parser');
const jsonSum = require('json-summary');

const parserOptions = {
		attributeNamePrefix : "@_",
		attrNodeName: "attr",
		textNodeName : "#text",
		ignoreAttributes : true,
		ignoreNameSpace : false,
		allowBooleanAttributes : false,
		parseNodeValue : false,
		parseAttributeValue : false,
		trimValues: true,
		cdataTagName: "__cdata", //default is 'false'
		cdataPositionChar: "\\c",
		parseTrueNumberOnly: false,
		arrayMode: false, //"strict"
		// attrValueProcessor: (val, attrName) => console.log('Attr', attrName),
		// tagValueProcessor : (val, tagName) => console.log('tag', tagName),
		stopNodes: ["parse-me-as-string"],
};

/**
 * [xmlSummary description]
 *
 * @param  {string} fileName - XML filename to summarize
 * @param  {[object]} options - see options
 * @return {Promise} resolves with summary or rejects with error
 */
function xmlSummary(fileName, options) {
	options = Object.assign({}, parserOptions, options || {});

	return new Promise((resolve, reject) => {
		try {
			const xmlData = fs.readFileSync(fileName, 'utf8');
			const jsonObj = parser.parse(xmlData, options, true);
			const summary = jsonSum.summarize(jsonObj);
			const text = jsonSum.printSummary(summary, {
				showExampleValue: options.showExampleValue,
				asText: options.asText,
				asJson: options.asJson
			});
			resolve(text);
		} catch(err) {
			reject(err);
		}
	});
}

xmlSummary.parserOptions = parserOptions;
module.exports = xmlSummary;
