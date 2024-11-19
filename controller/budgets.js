const Budget = require('../models/budget');
  
// Index: Get all budgets
const index = async (req, res) => {
    try {
      const budgets = await Budget.find({}); console.log('budgets', budgets)
      res.render('budgets/index', { title: "All Budgets", budgets });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Show: Get a specific budget by ID
  const show = async (req, res) => {
    try {
      const budget = await Budget.findById(req.params.id);
      if (!budget) {
        return res.status(404).json({ message: 'Budget not found' });
      }
      console.log('budget', budget )
      res.render('budgets/show', { budget });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // New: Render form for creating a new budget
  const newBudget = (req, res) => {
    res.render('budgets/new', {title:"add new budget", errormsg: ""});
  };

  const Homepage = (req, res) => {
    res.redirect('/budgets');
  };
  
  // Create: Add a new budget
  const create = async (req, res) => {
    try {
      const budget = new Budget(req.body);
      await budget.save();
      res.redirect('/budgets');
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
// Edit: Render form for editing an existing budget
const edit = async (req, res) => {
  try {
    const budget = await Budget.findById(req.params.id);
    if (!budget) {
      return res.status(404).json({ message: 'Budget not found' });
    }
    res.render('budgets/edit', {title:"Update Budget", budget });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

  // Update: Update an existing budget by ID
  const update = async (req, res) => {
    try {
      const budget = await Budget.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!budget) {
        return res.status(404).json({ message: 'Budget not found' });
      }
      res.redirect('/budgets');
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Delete: Delete a budget by ID
  const deleteBudget = async (req, res) => {
    try {
      const budget = await Budget.findByIdAndDelete(req.params.id);
      if (!budget) {
        return res.status(404).json({ message: 'Budget not found' });
      }
      res.redirect('/budgets');
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports = {
    index,
    new: newBudget,
    show,
    create,
    update,
    delete: deleteBudget,
   edit
  };