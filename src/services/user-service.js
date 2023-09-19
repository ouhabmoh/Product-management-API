import User from "../models/User.js";

class UserService {
	async getUsers() {
		return await User.find().select("_id email username role");
	}

	async getUser(id) {
		return await User.findById(id).select(" _id email username role");
	}

	async createUser(user) {
		const newUser = new User(user);
		return await newUser.save();
	}

	async updateUser(id, user) {
		return await User.findByIdAndUpdate(id, user);
	}

	async deleteUser(id) {
		return await User.findByIdAndDelete(id);
	}
}

export default new UserService();
