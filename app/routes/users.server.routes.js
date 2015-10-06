var users = require('../../app/controllers/users.server.controller'),
	passport = require('passport');

module.exports = function(app) {
    app.route('/users').post(users.create);
	app.route('/authenticate').post(passport.authenticate('fb-authenticate',{
		successRedirect: '/',
		failureRedirect: '/',
		failureFlash : true 
	}));
};
