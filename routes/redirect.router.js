const {Router} = require ('express');
const Link = require('../models/Link');
const config = require('config');
const router = Router();

router.get('/:code', async (req, res) => {
	try {
		const link = await Link.findOne({ code: req.params.code });
		if(!link) {
			return req.status(404).json('Страница не найдена');
		}
		
		link.clicks++;
		await link.save();

		res.redirect(link.from);

	} catch (err) {
		console.log(err.message);
		res.status(500).json({message: 'Ошибка сервера.'});
	}
});

module.exports = router;