# url-extension-validator

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> Methods for validating URL web page extensions (ending in .aspx, .php, .htm, .html ...)

Check if the supplied URL ends in a known web page extension or not.  The valid extensions list can be overridden for custom use cases.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Install

```javascript
npm install --save url-extension-validator
```

## Usage

```javascript
const UrlExtensionValidator = require('url-extension-validator');

const validator = new UrlExtensionValidator();
```
### To check if a URL ends in a valid web page extension
```javascript
const validUrl = validator.matchValidExtension('https://example.com/index.php'); // => true
```
### To check if a web page extension is valid or not
```javascript
const validExtension = validator.validateExtension('.html'); // => true
const alsoValid = validator.validateExtension('html'); // => true
```
### To return an array of valid web page extensions for any use case (i.e. custom map, filter or reduce functions)
```javascript
const validExtensions = UrlExtensionValidator.extensions(); // => ['.asp', '.aspx', ...]
```
### To return a simple map of valid web page extensions
```javascript
const validExtensionMap = validator.extensionMap(); // => { '.asp': true, '.aspx': true, ... }
```
### To wrap any method in a promise
```javascript
validator.chain( validator.validateExtension('.cgi') )
    .then(result // => true)
    .then(...) // do something async
    
```
### To override the valid extensions list
```javascript
const validator = new UrlExtensionsValidator({ extensionsList: ['.htm', '.html', '.btc'] });

const validExtension = validator.validateExtension('.php'); // => false
```
## Maintainers

[@njhoran](https://github.com/njhoran)

## Contributing



Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2019 njhoran
