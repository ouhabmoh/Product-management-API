import userService from "../services/user-service.js";

export const getUsers = async (req, res) => {
	try {
		const users = await userService.getUsers();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

export const getUser = async (req, res) => {
	try {
		const user = await userService.getUser(req.params.id);
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(404).json({ error: "User not found" });
		}
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

export const createUser = async (req, res) => {
	try {
		const newUser = await userService.createUser(req.body);
		res.status(201).json({ message: "User created", newUser });
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

export const updateUser = async (req, res) => {
	try {
		const updatedUser = await userService.updateUser(
			req.params.id,
			req.body
		);
		if (updatedUser) {
			res.status(200).json({ message: "User updated" });
		} else {
			res.status(404).json({ error: "User not found" });
		}
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

export const deleteUser = async (req, res) => {
	try {
		const deletedUser = await userService.deleteUser(req.params.id);
		if (deletedUser) {
			res.status(200).json({ message: "User deleted" });
		} else {
			res.status(404).json({ error: "User not found" });
		}
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};
