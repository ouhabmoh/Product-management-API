import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();

passport.use(
	"local-register",
	new LocalStrategy(
		{
			usernameField: "username",
			passwordField: "password",
			passReqToCallback: true,
		},

		async function (req, username, password, done) {
			try {
				const email = req.body.email;

				// Check if a user with the given email or username already exists
				const existingUser = await User.findOne({
					$or: [{ email }, { username }],
				});

				if (existingUser) {
					return done(null, false, {
						message: "Email/username is already taken.",
					});
				}

				// Create a new user
				const newUser = await User.register(
					new User({
						email,
						username,
					}),
					password
				);

				return done(null, newUser);
			} catch (error) {
				return done(error);
			}
		}
	)
);
