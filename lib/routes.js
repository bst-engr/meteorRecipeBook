FlowRouter.route('/', {
	name: 'home',
	action() {
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