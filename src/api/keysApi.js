"use strict";

//This file is mocking a web API by hitting hard coded data.
var chromaticScale = require('./keysData').chromaticScale;
var chordsByKey = require('./keysData').chordsByKey;

var _ = require('lodash');


var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var KeysApi = {
	getAllKeys: function() {
		return _clone(chromaticScale); 
	},

	getChordsForKeyName: function(keyName) {
		var keyChords = _.find(chordsByKey, {keyName: keyName});
		return _clone(keyChords.chords);
	}
};

module.exports = KeysApi;
