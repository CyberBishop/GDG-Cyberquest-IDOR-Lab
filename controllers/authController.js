const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
	const { username, password } = req.body;

	try {
		const maxIdUser = await User.findOne({}, {}, { sort: { id: -1 } });

		// Convert password to base64
		const encodedPassword = Buffer.from(password).toString("base64");

		const newUser = new User({
			id: maxIdUser ? maxIdUser.id + 1 : 1,
			username,
			password: encodedPassword,
		});

		const savedUser = await newUser.save();

		res.status(200).json({
			message: "User signed up successfully",
			user: savedUser,
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

exports.login = async (req, res) => {
	const { username, password } = req.body;

	try {
		const user = await User.findOne({ username });

		if (!user) {
			return res.status(401).json({ error: "User not found"});
		}

		const validPassword =
			Buffer.from(password).toString("base64") === user.password;

		if (!validPassword) {
			return res.status(400).json({ error: "Invalid Password" }});
		}

		const token = jwt.sign(
			{ _id: user._id, id: user.id },
			process.env.JWT_SECRET
		);

		res.cookie("token", token, { httpOnly: true });
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
};
