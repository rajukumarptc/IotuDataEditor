'use strict'

var mongoose = require('mongoose'),
Course = mongoose.model('Course');


exports.listAllCourses = function(req, res) {
    Course.find({}, function(err, course){
		if(err){
			res.send(err);
		}
		res.json(course);
	});	
};

exports.createACourse = function(req, res){
	var newCourse = new Course(req.body);
	newCourse.save(function(err, course){
		if(err)
			res.send(err);

		Course.find({}, function(err, courses){
			if(err){
				res.send(err);
			}
			res.json(courses);
		});	
	});
};


exports.readACourse = function(req, res){
	Course.findById(req.params.courseId, function(err, course){
		if(err)
			res.send(err)
		res.json(course);
	});
};


exports.updateACourse = function(req, res){
	Course.findOneAndUpdate({_id:req.params.courseId}, req.body, {new:true}, function(err, course){
		if(err)
			res.send(err);
		res.json(course);
	});
};

exports.deleteACourse = function(req, res){
	Course.remove({_id: req.params.courseId}, function(err, course){
		if(err)
			res.send(err);
		Course.find({}, function(err, courses){
			if(err){
				res.send(err);
			}
			res.json(courses);
		});	
	});
};
