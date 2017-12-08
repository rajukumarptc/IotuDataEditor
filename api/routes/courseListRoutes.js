'use strict'

module.exports = function(app){

	var courseList = require('../controllers/courseListController');

	app.route('/courses')
		.get(courseList.listAllCourses)
		.post(courseList.createACourse);


	app.route('/courses/:courseId')
		.get(courseList.readACourse)
		.put(courseList.updateACourse)
		.delete(courseList.deleteACourse);


	app.use('*', function(req, res){
		res.sendfile("./public/index.html");
	});

	// app.use(function(req,res){
	// 	res.status(404).send({url:req.originalUrl + ' not found'})
	// })
}
