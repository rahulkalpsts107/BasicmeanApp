exports.render = function(req, res) {
	var username = req.query.username;
	var pass = req.query.password;
	console.log(username + " " + pass);
    res.render('index', {
    	title: 'MEAN MVC'
    });
};