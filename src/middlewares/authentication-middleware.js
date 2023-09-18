import passport from "../authentication/passport.js";

export const isLoggedIn = (req, res, next) => {
	passport.authenticate("jwt", { session: false }, (err, user) => {
		console.log("jwt ver");
		if (err || !user) {
			console.log(err);
			// If authentication fails, you can handle the error or respond with an unauthorized status code
			return res
				.status(401)
				.json({ error: "Invalid token or token expired" });
		}
		// If authentication is successful, store the authenticated user in the request object

		req.user = user;
		console.log(req.user);
		next();
	})(req, res, next);
};
