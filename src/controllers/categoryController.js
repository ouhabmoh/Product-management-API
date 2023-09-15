// controllers/category.controller.js
import categoryService from "../services/category.service";

class CategoryController {
	async getCategories(req, res) {
		try {
			const categories = await categoryService.getCategories();
			res.status(200).json(categories);
		} catch (error) {
			console.error("Error fetching categories:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	}

	async createCategory(req, res) {
		try {
			const { name, description } = req.body;
			const newCategory = await categoryService.createCategory({
				name,
				description,
			});
			res.status(201).json(newCategory);
		} catch (error) {
			console.error("Error creating category:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	}

	async getCategoryById(req, res) {
		try {
			const categoryId = req.params.id;
			const category = await categoryService.getCategoryById(
				categoryId
			);

			if (!category) {
				res.status(404).json({ error: "Category not found" });
			} else {
				res.status(200).json(category);
			}
		} catch (error) {
			console.error("Error fetching category:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	}

	async updateCategory(req, res) {
		try {
			const categoryId = req.params.id;
			const updates = req.body;
			const updatedCategory = await categoryService.updateCategory(
				categoryId,
				updates
			);

			if (!updatedCategory) {
				res.status(404).json({ error: "Category not found" });
			} else {
				res.status(200).json(updatedCategory);
			}
		} catch (error) {
			console.error("Error updating category:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	}

	async deleteCategory(req, res) {
		try {
			const categoryId = req.params.id;
			const deletedCategory = await categoryService.deleteCategory(
				categoryId
			);

			if (!deletedCategory) {
				res.status(404).json({ error: "Category not found" });
			} else {
				res.status(204).send(); // Respond with no content upon successful deletion
			}
		} catch (error) {
			console.error("Error deleting category:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	}
}

export default new CategoryController();
