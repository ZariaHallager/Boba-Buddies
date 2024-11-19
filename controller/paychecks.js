const Paycheck = require('../models/paycheck');

// Index: Get all paychecks
const index = async (req, res) => {
  try {
    const paychecks = await Paycheck.find();
    res.render('paychecks/index', { title: "All paychecks", paychecks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Show: Get a specific paycheck by ID
const show = async (req, res) => {
  try {
    const paycheck = await Paycheck.findById(req.params.id);
    if (!paycheck) {
      return res.status(404).json({ message: 'Paycheck not found' });
    }
    res.render('paychecks/show', { paycheck });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// New: Render form for creating a new paycheck
const newPaycheck = (req, res) => {
  res.render('paychecks/new', {title:"add new paycheck", errormsg: ""});
};

// Create: Add a new paycheck
const create = async (req, res) => {
  try {
    const paycheck = new Paycheck(req.body);
    await paycheck.save();
    res.redirect('/paychecks');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Edit: Render form for editing an existing paycheck
const edit = async (req, res) => {
  try {
    const paycheck = await Paycheck.findById(req.params.id);
    if (!paycheck) {
      return res.status(404).json({ message: 'Paycheck not found' });
    }
    res.render('paychecks/edit', {title:"Update Paycheck", paycheck });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update: Update an existing paycheck by ID
const update = async (req, res) => {
  try {
    const paycheck = await Paycheck.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!paycheck) {
      return res.status(404).json({ message: 'Paycheck not found' });
    }
    res.redirect('/paychecks');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete: Delete a paycheck by ID
const deletePaycheck = async (req, res) => {
  try {
    const paycheck = await Paycheck.findByIdAndDelete(req.params.id);
    if (!paycheck) {
      return res.status(404).json({ message: 'Paycheck not found' });
    }
    res.redirect('/paychecks');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    index,
    show,
    new: newPaycheck,
    create,
    edit,
    update,
    delete: deletePaycheck
  };