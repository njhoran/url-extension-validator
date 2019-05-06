'use strict';

const { assert, expect } = require('chai');
const expectedExtensionsList = require('./fixtures/extensions-list');

const PageExtensions = require('../lib/page-extensions');

describe('Creating an instance of the page extension base class', () => {
	
	it('should instantiate an object of the expected type', () => {
		const extensions = new PageExtensions();

		expect(extensions).to.be.an.instanceOf(PageExtensions);
	});

	it('should handle the extensionsList property', () => {
		const extensions = new PageExtensions({ extensionsList: [] });
		
		expect(extensions).to.have.property('extensionsList').that.is.an('array').to.deep.equal([]);
	});
	
	it('should export the static extensions() method', () => {
		assert.isFunction(PageExtensions.extensions);
	});

	it('should export the extensionsMap() method', () => {
		const extensions = new PageExtensions();

		assert.isFunction(extensions.extensionMap);
	});
	
});

describe('Calling the static extensions() methhod', () => {
	
	it('returns a simple array of valid web page extensions', () => {
		const extensionsList = PageExtensions.extensions();

		expect(extensionsList).to.be.an('array').to.deep.equal(expectedExtensionsList);
	});
	
});

describe('Calling the extensionsList property', () => {
	
	it('returns the overridden extensions list', () => {
		const extensions = new PageExtensions({ extensionsList: ['.html', '.shtml', '.xhtml'] });
		
		expect(extensions.extensionsList).to.be.an('array').to.deep.equal(['.html', '.shtml', '.xhtml']);
	});

});

describe('Calling the extensionsMap() method with an overridden extensions list', () => {
	
	it('returns the overridden extensions map', () => {
		const extensions = new PageExtensions({ extensionsList: ['.html', '.shtml', '.xhtml'] });
		
		expect(extensions.extensionMap()).to.be.an('object').to.deep.equal({
			'.html'  : true,
			'.shtml' : true,
			'.xhtml' : true
		});
	});
	
});

describe('Calling the extensionsMap() method', () => {
	
	it('returns a lookup map of valid web page extensions', () => {
		const expectedExtensionsMap = _getExtensionsMap(expectedExtensionsList);
		const extensions = new PageExtensions();
		
		expect(extensions.extensionMap()).to.be.an('object').to.deep.equal(expectedExtensionsMap);
	});
	
});

const _getExtensionsMap = (extensionsList) => extensionsList.reduce((extensionsMap, extension) => Object.assign(
	{}, extensionsMap, { [extension]: true }
), {});
