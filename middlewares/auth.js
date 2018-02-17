var mongoose = require('mongoose');

//router level middleware for checking user login.
module.exports.checkLogin = function(req,res,next){

	if(!req.user && !req.session.user){
		res.redirect('/user/login');
	}
	else{
		next();
	}

}//end checkLogin.

//router level middleware for checking  user logged in.
module.exports.loggedIn = function(req,res,next){

	if(!req.user && !req.session.user){
		next();
	}
	else{
		res.redirect('/chat');
	}

}//end loogedIn