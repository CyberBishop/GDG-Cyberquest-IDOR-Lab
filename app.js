require("dotenv").config();
require("./utils/dbConnect");

const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const express = require("express");
const app = express();

const authRoute = require("./routes/authRoute");
const accountRoute = require("./routes/accountRoute");

app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

app.get("/", async (req, res) => {
	const token = req.cookies.token;

	if (token) {
		const user = await jwt.decode(token, process.env.JWT_SECRET);
		return res.redirect(`/user/${user.id}`);
	} else {
		return res.redirect("/login.html");
	}
});

app.use("/api/auth", authRoute);
app.use("/user", accountRoute);

app.get("*", (req, res) => {
	return res.redirect("/404.html");
});

app.listen(process.env.PORT, () => {
	console.log(`server running on http://localhost:${process.env.PORT}`);
});
