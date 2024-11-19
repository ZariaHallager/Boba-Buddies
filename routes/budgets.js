const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const budgetsCtrl = require('../controller/budgets');

	
// GET /expenses
router.get('/', budgetsCtrl.index);
// GET /expenses/new
router.get('/new', budgetsCtrl.new);

router.post('/', budgetsCtrl.create);

router.get('/:id/edit', budgetsCtrl.edit);

router.get('/:id', budgetsCtrl.show);

router.delete('/:id', budgetsCtrl.delete);

router.put('/:id', budgetsCtrl.update);

module.exports = router;


