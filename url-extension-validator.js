'use strict';

const PageExtensions = require('./lib/page-extensions');

class UrlExtensionValidator extends PageExtensions {
	constructor (props) {
		super(props);
	}
	
	validateExtension (extension) {
		const testExtension = /^\.[\w\d]+$/i.test(extension) ? extension : `.${extension}`;
		return !!this.extensionMap()[testExtension];
	}
	
	matchValidExtension (url) {
		return UrlExtensionValidator.extensions().reduce((result, extension) => {
			return result || RegExp(`\\${extension}$`).test(` ${url}`.toLowerCase());
		}, false);
	}
	
	chain (method) {
		return Promise.resolve(method);
	}
}

module.exports = UrlExtensionValidator;
