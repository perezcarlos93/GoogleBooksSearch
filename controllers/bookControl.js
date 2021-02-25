const db = require('../models');

module.exports = {
	findBooks: (req, res) => {
		db.Book.find(req.query)
			.then((dbBook) => res.json(dbBook))
			.catch((err) => console.log(err));
	},
	findByID: (req, res) => {
		db.Book.findById(req.params.id)
			.then((dbBook) => res.json(dbBook))
			.catch((err) => console.log(err));
	},
	newBook: (res, req) => {
		db.Book.create(req.body)
			.then((dbBook) => res.json(dbBook))
			.catch((err) => console.log(err));
	},
	update: (res, req) => {
		db.Book.findOneAndUpdate({ id: req.params.id })
			.then((dbBook) => res.json(dbBook))
			.catch((err) => console.log(err));
	},
	delete: (res, req) => {
		db.Book.findById(req.params.id)
			.then((dbBook) => dbBook.remove())
			.then((dbBook) => res.json(dbBook))
			.catch((err) => console.log(err));
	},
};
