const axios = require('axios');
const db = require('../models');

module.exports = {
	findAll: (req, res) => {
		const { query: params } = req.params;
		axios
			.get('https://www.googleapis.com/books/v1/volumes?q=', { params })
			.then((results) => {
				results.data.items.filter(
					(result) =>
						result.volumeInfo.title &&
						result.volumeInfo.infoLink &&
						result.volumeInfo.authors &&
						result.volumeInfo.description &&
						result.volumeInfo.imageLinks &&
						result.volumeInfo.imageLinks.thumbnail
				);
			})
			.then((apiArray) => {
				db.Book.find().then((dbBooks) => {
					apiArray.filter((apiArray) =>
						dbBooks.every(
							(dbBooks) => dbBooks.googleId.toString() !== apiArray.Book.id
						)
					);
				});
			})
			.then((bookResults) => res.json(bookResults))
			.catch((err) => res.status(422).json(err));
	},
};
