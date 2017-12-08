'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var courseSchema = new Schema({
	courseId:{
		type: String,
		required: "Kindly enter the Course Id"
	},
	title:String,
	summary:String,
	type:String,
	launchLink:{
		type: String,
		required: "Kindly enter launchLink"
	},
    createdAt:{
		type: Date,
		default: Date.now
	}
}


// var courseSchema = new Schema({
//     courseId:{
//         type: String,
//         required: "Kindly enter the Course Id"
//     },
//     title:{
//         id:String,
//         name: String
//     },
//     summary:{
//         type: String
//     },
//     type:{
//         id:String,
//         name: String
//     },
//     launchLink:{
//         type: String,
//         required: "Kindly enter launchLink"
//     },
//     canEdit:Boolean,
//     canEnroll:Boolean,
//     duration:String,
//     isFeatured:String,
//     language:{
//         id: String,
//         name: String
//     },
//     requirement:String,
//     showBannerText:Boolean,
//     outcome:String,
//     difficulty:{
//         id: String,
//         name: String
//     },
//     tags:[{id: String, name: String}],
//     technologies:[{id: String, name: String}],
//     thumbnail:{
//         cmtype: String,
//         name: String,
//         source:String
//     },
//     video:{
//         cmtype: String,
//         name: String,
//         source:String,
//         iframeSource:String
//
//     },
//     trophy:{
//         cmtype: String,
//         name: String,
//         source:String
//     },
//     createdAt:{
//         type: Date,
//         default: Date.now
//     }
// }

);

module.exports = mongoose.model("Course", courseSchema);



