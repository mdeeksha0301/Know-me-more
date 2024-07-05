// routes/portfolioRoutes.js

const express = require('express');
const router = express.Router();
const skillsControllers = require('../controllers/skillsControllers');

// POST request to add a new skill
router.post('/add-skill', skillsControllers.addNewSkill);

router.delete('/delete-skill/:id', skillsControllers.deleteSkill);
router.delete('/delete-title/:id', skillsControllers.deleteCategory);
router.put('/update-title/:id', skillsControllers.editSkills);
module.exports = router;
