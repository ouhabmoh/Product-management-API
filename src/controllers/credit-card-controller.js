import creditCardService from "../services/credit-card-service.js";

class CreditCardController {
	async getFilteredCreditCardData(req, res) {
		try {
			const { limit = 10 } = req.query;
			const creditCardData =
				await creditCardService.fetchCreditCardData(limit);

			if (!creditCardData) {
				return res
					.status(404)
					.json({ error: "No credit card data available." });
			}

			res.status(200).json(creditCardData);
		} catch (error) {
			console.error("Error in external API controller:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	}
}

export default new CreditCardController();
