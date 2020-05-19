[![NPM version](https://img.shields.io/npm/v/xml-summary.svg)](https://www.npmjs.com/package/xml-summary)
[![Build Status](https://img.shields.io/travis/moos/xml-summary/master.svg)](https://travis-ci.org/moos/xml-summary)

# xml-summary

 Get a summary of an XML file in plain text (much like [json-summary](https://andrewtburks.dev/json-summary/)).

Particularly useful for large XML files.

## Install
```
npm i xml-summary
```
Install with `-g` for CLI usage.

## Usage
```js
const xmlSummary = require('xml-summary');

xmlSummary('file.xml', options)
	.then(res => {
		console.log(res);
	})
	.catch(err => {
		console.error(err);
	});
```

### Options

Any [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser#xml-to-json) or [json-summary](https://andrewtburks.dev/json-summary/) options.

## CLI

```
$ xml-summary file.xml [options]

Options:
  --attrs      Include attributes in summary
  --values     Include example values
  --json       Output as parsable JSON
```

## Example
```
$ xml-summary sample/email.xml
  emails:
    email: (4) [
        to: 100% <string>
        from: 100% <string>
        heading: 75.0% <string>
        body: 100% <string>
    ]
```

See [json-summary](https://andrewtburks.dev/json-summary/) for further examples of output.

# License
MIT

# Change log
- 0.1.1 - Add basic test
- 0.1.0 - initial version
