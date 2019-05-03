'use strict';

const { assert, expect } = require('chai');

const UrlExtensionValidator = require('../url-extension-validator');

describe('Creating an instance of the URL extension validator class', () => {
	
	it('should instantiate an object of the expected type', () => {
		const validator = new UrlExtensionValidator();
		
		expect(validator).to.be.an.instanceOf(UrlExtensionValidator);
	});
	
	it('should export the static extensions() method', () => {
		assert.isFunction(UrlExtensionValidator.extensions);
	});
	
	it('should export the extensionsMap() method', () => {
		const validator = new UrlExtensionValidator();
		
		assert.isFunction(validator.extensionMap);
	});

	it('should export the validateExtension method', () => {
		const validator = new UrlExtensionValidator();
		
		assert.isFunction(validator.validateExtension);
	});
	
	it('should export the matchValidExtension method', () => {
		const validator = new UrlExtensionValidator();
		
		assert.isFunction(validator.matchValidExtension);
	});
});

describe('Calling the validateExtension() method', () => {
	
	it('should return true when supplied with a valid web page extension', () => {
		const validator = new UrlExtensionValidator();
		
		expect(validator.validateExtension('.html')).to.be.a('boolean').to.equal(true);
	});

	it('should return false when supplied with invalid extensions', () => {
		const invalidExtensions = [ '.zzzz', '.http', '', null, 12345, '.cgj', 'htmp', 0, -0.000657 ];
		const validator = new UrlExtensionValidator();
		
		invalidExtensions.forEach(invalidExtension => {
			expect(validator.validateExtension(invalidExtension)).to.be.a('boolean').to.equal(false);
		});
	});
	
	it(`should validate '.aspx' when supplied with 'aspx'`, () => {
		const validator = new UrlExtensionValidator();
		
		expect(validator.validateExtension('aspx')).to.be.a('boolean').to.equal(true);
	});
});

describe('Calling the matchValidExtension() method', () => {
	
	it('should return true when supplied with a URL ending in a valid webpage extension', () => {
		const validator = new UrlExtensionValidator();
	
		const urls = [
			'http://example.com/example.html',
			'https://pages.example.co.uk/#!/example/765/af321d12-cb21-19a0-18de-12345abc1d33/Please.aspx',
			'https://path/to/the/resource/Account.PHP',
			'//example.comx/path/to/the/resource/Login.Asp'
		];
		
		urls.forEach(url => {
			expect(validator.matchValidExtension(url)).to.be.a('boolean').to.equal(true);
		});
	});

	it('should return false when supplied with URLs that do not end in a valid webpage extension', () => {
		const urls = [
			'http://example.com',
			'https://www.example.com/',
			'http://www.example.com/path/to/resource.Please',
			'https://www.example.com/index.<br />',
			'',
			null,
			1000,
			0,
			-0.00001234,
			'https://pages.example.co.uk/#!/example/765/af321d12-cb21-19a0-18de-12345abc1d33/Please.aspxq',
			'https://pages.example.co.uk/#!/example/765/af321d12-cb21-19a0-18de-12345abc1d33/Please.cgi?a=4&amp;b=new'
		];
	
		const validator = new UrlExtensionValidator();
		
		urls.forEach(url => {
			expect(validator.matchValidExtension(url)).to.be.a('boolean').to.equal(false);
		});
	});
	
});
