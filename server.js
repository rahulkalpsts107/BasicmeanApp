var port = 1337;
var config = require('./config/config'),
	express = require('./config/express'),
	mongoose = require('./config/mongoose'),
	passport = require('passport'),
	expressSession = require('express-session'),
	LocalStrategy = require('passport-local').Strategy,
	FacebookStrategy = require('passport-facebook').Strategy;
	
var	db = mongoose(), 
	app = express();
	
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());
passport.use('local-authenticate', new LocalStrategy({passReqToCallback : true},function(req, res) {
	console.log("In Authenticate ");
	//NOTE:Req has response objected embedded , so be careful
	if(req.query.username == 'deep' && req.query.password == 'qwerty') {
		return req.res.redirect('/');
	} else {
		//done(null, { user: username });
	}
}));

passport.use('fb-authenticate', new FacebookStrategy({
	clientID: config.fb_id,
    clientSecret: config.fb_secret,
    callbackURL: "http://localhost:1337/"
	},
	function(accessToken, refreshToken, profile, done) {
		// asynchronous verification, for effect...
		process.nextTick(function () {
		  
		  // To keep the example simple, the user's Facebook profile is returned to
		  // represent the logged-in user.  In a typical application, you would want
		  // to associate the Facebook account with a user record in your database,
		  // and return that user instead.
		  return req.res.redirect("www.facebook.com");
		});
	}
));

app.listen(port);
module.exports = app;
console.log('Server running at http://localhost:' + port);