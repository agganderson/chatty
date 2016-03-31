var mongoose = require('mongoose');
var uniqueValidate = require('mongoose-unique-validator');
var validate = require('mongoose-validator');

var GroupChatSchema = new mongoose.Schema({
	title: {type: String, required: true, unique: true},
	created_at: {type: Date, default: new Date}
});

GroupChatSchema.plugin(uniqueValidate);

mongoose.model('GroupChat', GroupChatSchema);