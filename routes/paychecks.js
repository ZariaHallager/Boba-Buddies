const express = require('express');
const router = express.Router();
const paycheckCtrl = require('../controller/paychecks');

// Index: Get all paychecks
router.get('/paychecks', paycheckCtrl.index);

// New: Render form for creating a new paycheck
router.get('/paychecks/new', paycheckCtrl.new);

// Show: Get a specific paycheck by ID
router.get('/paychecks/:id', paycheckCtrl.show);

// Create: Add a new paycheck
router.post('/paychecks', paycheckCtrl.create);

// Edit: Render form for editing an existing paycheck
router.get('/paychecks/:id/edit', paycheckCtrl.edit);

// Update: Update an existing paycheck by ID
router.put('/paychecks/:id', paycheckCtrl.update);

// Delete: Delete a paycheck by ID
router.delete('/paychecks/:id', paycheckCtrl.delete);

module.exports = router;