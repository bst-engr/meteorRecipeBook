Recipes = new Mongo.Collection('recipes'); //initliazing a collection
//collection rule
Recipes.allow({
	insert: function (userId, doc) {
		return !!userId;
	},
	update: function (userId, doc) {
		return !!userId;	
	}
});
//Defining Ingredient schema

Ingredient = new SimpleSchema ({
	name:{
		type: String
	},
	amount: {
		type: String
	}
});

//Defining schema for recepies
RecipeSchema = new SimpleSchema ({
	name: {
		type: String,
		label: "Name"
	},
	desc: {
		type: String,
		label: 'Description'
	},
	ingredient: {
		type: [Ingredient]
	},
	inMenu:{
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: "hidden"
		}
	},
	author: {
		type: String,
		label: 'Author',
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: { 
		type: Date,
		label: "Created At",
		autoValue : function () {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});

Meteor.methods({
	toggleMenuItem: function (id, currentState) {
		Recipes.update(id, {
			$set:{
				inMenu: !currentState
			}
		});
	},
	//delete recipe function
	deleteRecipe: function (id) {
		Recipes.remove(id);
	}
});

//attaching scehma to collection
Recipes.attachSchema (RecipeSchema);