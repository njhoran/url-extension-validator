'use strict';

class PageExtensions {
	constructor () {
		this.extensionsList = PageExtensions.extensions();
	}

	extensionMap() {
		return PageExtensions.extensions().reduce((extensionsMap, extension) => Object.assign(
			{}, extensionsMap, { [extension]: true }
		), {});
	}
	
	static extensions () {
		return [
			'.asp',  '.aspx', '.axd',   '.asx',   '.asmx',  '.ashx', '.css', '.cfm',   '.yaws',   '.swf',
			'.html', '.htm',  '.xhtml', '.jhtml', '.jsp',   '.jspx', '.wss', '.do',    '.action', '.js',
			'.pl',   '.php',  '.php4',  '.php3',  '.phtml', '.py',   '.rb',  '.rhtml', '.shtml',  '.xml',
			'.rss',  '.svg',  '.cgi',   '.dll'
		];
	}
}

module.exports = PageExtensions;