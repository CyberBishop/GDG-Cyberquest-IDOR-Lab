const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	// add an auto increment id
	id: {
		type: Number,
		required: [true, "ID is required!"],
		unique: true,
	},
	username: {
		type: String,
		required: [true, "Username is required!"],
		unique: true,
		trim: true,
		lowercase: true,
		minlength: [4, "Username must be at least 4 characters long!"],
		maxlength: [20, "Username must be at most 20 characters long!"],
	},
	password: {
		type: String,
		required: [true, "Password is required!"],
	},
});

module.exports = mongoose.model("User", userSchema);
