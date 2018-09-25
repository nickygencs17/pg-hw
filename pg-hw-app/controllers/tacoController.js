var TacoConstants = require( "./../constants/tacoConstants.js");

module.exports = {
	getQuote: function (name, age, gender, condition) {
		if (age < 18) {
			return TacoConstants.UNDERAGE;
		}

		var quote_price = TacoConstants.BASE_PRICE;
		var number_of_five_year_incraments = Math.floor((age - TacoConstants.STARTING_AGE) / TacoConstants.NUMBER_OF_YEARS);

		quote_price = quote_price + (TacoConstants.COST_PER_NUMBER_OF_YEAR_INCREMENT * number_of_five_year_incraments);
		quote_price = this.addCondPercent(condition, quote_price);

		if (gender === 'female')
			quote_price = quote_price - 12;

		return this.quoteFormat(name, quote_price);
	},

	quoteFormat: function (name, quote_price) {
		var formated = parseFloat(Math.round(quote_price * 100) / 100).toFixed(2);
		return name + TacoConstants.SEPARATOR +formated ;
	},

	addCondPercent: function (condition, quote_price) {

		if (condition === 'Allergies')
			quote_price = (quote_price * (1 + TacoConstants.ALLERGIES));
		else if (condition === 'Sleep Apnea')
			quote_price = (quote_price * (1 + TacoConstants.SLEEP_APNEA));
		else if (condition === 'Heart Disease')
			quote_price = (quote_price * (1 + TacoConstants.HEART_DISEASE));
		return quote_price;
	}
};





// private static Object QuoteFormat(String name, double quote_price) {

// 		DecimalFormat format = new DecimalFormat( '0.00 ');
// 		String formatted = format.format(quote_price);
// 		return name + TacoConstants.SEPARATOR + formatted;

// }