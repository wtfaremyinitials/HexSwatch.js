// HexSwatch.js

window.hexswatch = ({
	
	'version': '1.0.0',
	
	'markup': '<span style="background-color: $1; color: $1; border: 1px solid gray; border-radius: 3px">__</span>',
	
	'addSwatches': function(data) {		
		return data.replace(/(#[0-9a-f]{6})/ig, '$1 ' + window.hexswatch.markup);
	},
	
	'replaceWithSwatches': function(data) {		
		return data.replace(/(#[0-9a-f]{6})/ig, window.hexswatch.markup);
	}
	
});