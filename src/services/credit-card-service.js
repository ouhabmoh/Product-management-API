import axios from "axios";

class CreditCardService {
	// Function to fetch credit card data from the external API
	async fetchCreditCardData(limit) {
		try {
			// Define the API endpoint URL
			const apiUrl =
				"https://random-data-api.com/api/v2/credit_cards?size=100";

			const response = await axios.get(apiUrl);

			if (response.status !== 200) {
				throw new Error(
					"Failed to fetch credit card data from the API."
				);
			}

			if (response.data.message) {
				throw new Error(response.data.message);
			}

			const rawData = response.data;

			// Filter and customize the data (e.g., exclude credit card numbers, limit to Visa)

			const visaCards = rawData
				.filter(
					// filter method to keep only Visa cards
					(item) =>
						item.credit_card_type.toLowerCase() === "visa"
				)
				.map(({ credit_card_number, ...rest }) => rest) //map method to create a new array with the desired format (excluding credit_card_number)
				.slice(0, limit); //slice method to create a new array with limit
			return visaCards;
		} catch (error) {
			throw new Error(
				"Error fetching credit card data: " + error.message
			);
		}
	}
}

export default new CreditCardService();
