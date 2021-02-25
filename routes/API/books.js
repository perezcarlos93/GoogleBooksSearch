const router = require('express').Router();
const bookControl = require('../../controllers/bookControl');

router.route('/').get(bookControl.findBooks).post(bookControl.newBook);

router
	.route('/:id')
	.get(bookControl.findByID)
	.put(bookControl.update)
	.delete(bookControl.delete);

module.exports = router;
