const User = require("../models/user");
const jwt = require("jsonwebtoken");
const ejs = require("ejs");
const path = require("path");

// return user data via id
exports.getUser = async (req, res) => {
	const { id } = req.params;
	try {
		const user = await User.findOne({ id });

		if (!user) {
			return res.redirect("/userNotFound.html");
		}

		const templatePath = path.join(
			__dirname,
			"..",
			"templates",
			"userDetails.ejs"
		);

		ejs.renderFile(templatePath, { user }, (err, html) => {
			if (err) {
				console.log(err);
				return res.status(500).json({ error: "Internal Server Error" });
			}

			res.send(html);
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
