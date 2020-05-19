
# xml-summary
 Get a summary of an XML file in plain text.

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

```bash
$ xml-summary file.xml [options]

Options:
  --attrs            Include attributes in summary
  --example-values   Include example values
  --json             Output as parsable JSON
```

## Example
```
$ node .\bin\cli.js sample\email.xml
  emails:
    email: (4) [
        to: 100% <string>
        from: 100% <string>
        heading: 75.0% <string>
        body: 100% <string>
    ]
```

See [json-summary](https://andrewtburks.dev/json-summary/) for further examples.

# License
MIT

# Change log
- v0.1.0 - initial version
