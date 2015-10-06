var User = require('mongoose').model('User');
//var passport = require('passport');

exports.create = function(req, res, next) {
	var username = req.query.username;
	var pass = req.query.password;
	console.log(username + " " + pass + " ");
	console.log(req.body);
    var user = new User();
	user.username = username;
	user.password=pass;
    user.save(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(user);
        }
    });
};