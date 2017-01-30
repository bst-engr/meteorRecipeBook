Meteor.subscribe('recipes');

Template.Recipes.helpers({
	recipes: function () {
		return Recipes.find();
	}
});