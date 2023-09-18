import passport from "../authentication/passport.js";
import signToken from "../authentication/sign-token.js";

export const login = (req, res, next) => {
	passport.authenticate("local-login", async (err, user, info) => {
		try {
			if (err) {
				return next(err);
			}
			if (!user) {
				return res.status(400).json({ message: info.message });
			}
			const token = await signToken(user);
			sendResponse(res, user, token);
		} catch (error) {
			next(error);
		}
	})(req, res, next);
};

export const register = (req, res, next) => {
	passport.authenticate("local-register", async (err, user, info) => {
		try {
			if (err) {
				return next(err);
			}
			if (!user) {
				return res.status(400).json({ message: info.message });
			}
			const token = await signToken(user);
			sendResponse(res, user, token);
		} catch (error) {
			next(error);
		}
	})(req, res, next);
};

const sendResponse = (res, user, token) => {
	res.status(200).json({
		token,
	});
};
