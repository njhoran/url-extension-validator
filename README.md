# url-extension-validator

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> Methods for validating URL web page extensions (ending in .aspx, .php, .htm, .html ...)

TODO: Fill out this long description.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Install

```
npm install --save url-extension-validator
```

## Usage

```
const UrlExtensionValidator = require('url-extension-validator');

const validator = new UrlExtensionValidator();

// to check if a URL ends in a valid web page extension

const validUrl = validator.matchValidExtension('https://example.com/index.php'); // => true

// check if a web page extension is valid or not

const validExtension = validator.validateExtension('.html'); // => true
const alsoValid = validator.validateExtension('html'); // => true

// return an array of valid web page extensions for any useage (i.e. custom map, filter or reduce functions)

const validExtensions = UrlExtensionValidator.extensions(); // => ['.asp', '.aspx', ...]

// return a simple map of valid web page extensions

const validExtensionMap = validator.extensionMap(); // => { '.asp': true, '.aspx': true, ... }

// to wrap any method in a promise

validator.chain( validator.validateExtension('.cgi') )
    .then(result // => true)
    .then(...) // do something async
```

## Maintainers

[@njhoran](https://github.com/njhoran)

## Contributing



Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2019 njhoran
