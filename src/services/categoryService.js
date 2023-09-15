// services/category.service.js
import Category from "../models/category.model";

class CategoryService {
	async getCategories() {
		try {
			const categories = await Category.find();
			return categories;
		} catch (error) {
			throw error;
		}
	}

	async createCategory(categoryData) {
		try {
			const newCategory = await Category.create(categoryData);
			return newCategory;
		} catch (error) {
			throw error;
		}
	}

	async getCategoryById(categoryId) {
		try {
			const category = await Category.findById(categoryId);
			return category;
		} catch (error) {
			throw error;
		}
	}

	async updateCategory(categoryId, updates) {
		try {
			const updatedCategory = await Category.findByIdAndUpdate(
				categoryId,
				updates,
				{
					new: true, // Return the updated category
					runValidators: true, // Run validation checks on updates
				}
			);

			return updatedCategory;
		} catch (error) {
			throw error;
		}
	}

	async deleteCategory(categoryId) {
		try {
			const deletedCategory = await Category.findByIdAndDelete(
				categoryId
			);
			return deletedCategory;
		} catch (error) {
			throw error;
		}
	}
}

export default new CategoryService();
