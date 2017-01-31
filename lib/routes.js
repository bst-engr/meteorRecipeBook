
if (Meteor.isClient) {
	//auto redirection on login
	Accounts.onLogin(function(){
		FlowRouter.go('recipe-book');
	});
	//auto redirection on logout
	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}
//**********end on login and logout actions.**********/
//route trigger function for non authenticated users.
FlowRouter.triggers.enter([function(context, redirect) {
	if(!Meteor.userId()) {
		FlowRouter.go('home');
	}
}]);

//********************Routes**************************/
FlowRouter.route('/', {
	name: 'home',
	action() {
		if(Meteor.userId()) {
			FlowRouter.go('recipe-book');
		}
		GAnalytics.pageview(); //use to register in google analytics as page view.
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Recipes'});
	}
});

FlowRouter.route('/recipe/:id', {
	name: 'recipe',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
	}
});

FlowRouter.route('/menu', {
	name: 'menu',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Menu'});
	}
});

FlowRouter.route('/shopping-list', {
	name: 'shopping-list',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
	}
});