/*global define */

define([
	'knockout'
], function (ko) {
	'use strict';

	// represent a single todo item
	return function (title, completed) {
		this.title = ko.observable(title);
		this.completed = ko.observable(completed);
		this.editing = ko.observable(false);
	};

});
