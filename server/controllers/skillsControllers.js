const Skill  = require("../models/portfolioModel").Skill;

// const addNewSkill = async(req, res) => {
//     const { title, name, image } = req.body;

//     // Validate incoming data
//     if (!name || !image) {
//         return res.status(400).json({ success: false, message: 'Name and image are required' });
//     }

//     try {
//         // Check if the title already exists
//         let existingSkills = await Skill.findOne({ title });

//         if (existingSkills) {
//             // Title exists, add the new skill to skillsList
//             existingSkills.skillsList.push({ name, image });
//             await existingSkills.save();
//         } else {
//             // Title does not exist, create a new document
//             existingSkills = await Skill.create({ title, skillsList: [{ name, image }] });
//         }

//         return res.status(200).json({ success: true, message: 'Skill added successfully', skill: existingSkills });
//     } catch (error) {
//         console.error('Error in adding new skill:', error);
//         return res.status(500).json({ success: false, message: 'Failed to add new skill' });
//     }

//     const { id } = req.params;
//     const { title, skills } = req.body;

//     try {
//         const skill = await Skill.findByIdAndUpdate(id, { title, skills }, { new: true });

//         if (!skill) {
//             return res.status(404).json({ success: false, message: 'Skill category not found' });
//         }

//         res.status(200).json({ success: true, message: 'Skill category updated successfully', skill });
//     } catch (error) {
//         console.error('Error updating skill category:', error);
//         res.status(500).json({ success: false, message: 'Failed to update skill category' });
//     }

// }

const addNewSkill = async (req, res) => {
    const { title, name, image } = req.body;

    // Validate incoming data
    if (!title || !name || !image) {
        return res.status(400).json({ success: false, message: 'Title, Name, and Image are required' });
    }

    try {
        // Check if the title already exists
        let existingSkill = await Skill.findOne({ title });

        if (existingSkill) {
            // Title exists, check if skill with the same name already exists
            const skillExists = existingSkill.skillsList.some(skill => skill.name === name);
            if (skillExists) {
                return res.status(400).json({ success: false, message: 'Skill with this name already exists in the category' });
            }
            
            // Add the new skill to skillsList
            existingSkill.skillsList.push({ name, image });
            await existingSkill.save();
            
            return res.status(200).json({ success: true, message: 'Skill added successfully', skill: existingSkill });
        } else {
            // Title does not exist, create a new document
            const newSkill = await Skill.create({ title, skillsList: [{ name, image }] });
            return res.status(200).json({ success: true, message: 'New skill category created successfully', skill: newSkill });
        }
    } catch (error) {
        console.error('Error in adding new skill:', error);
        return res.status(500).json({ success: false, message: 'Failed to add new skill' });
    }
};

// const deleteSkill = async (req, res) => {
//     const { id } = req.params;
  
//     try {
//       const skill = await Skill.findById(id);
  
//       if (!skill) {
//         return res.status(404).json({ success: false, message: 'Skill not found' });
//       }
  
//       await skill.remove();
  
//       return res.status(200).json({ success: true, message: 'Skill deleted successfully' });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ success: false, message: 'Server error' });
//     }
//   };

const deleteSkill = async (req, res) => {
    const { categoryId, skillId } = req.params;

    try {
        const skillCategory = await Skill.findById(categoryId);

        if (!skillCategory) {
            return res.status(404).json({ success: false, message: 'Skill category not found' });
        }

        // Filter out the skill to be deleted from skillsList
        skillCategory.skillsList = skillCategory.skillsList.filter(skill => skill._id.toString() !== skillId);
        await skillCategory.save();

        return res.status(200).json({ success: true, message: 'Skill deleted successfully', skillCategory });
    } catch (error) {
        console.error('Error deleting skill:', error);
        return res.status(500).json({ success: false, message: 'Failed to delete skill' });
    }
};

  

  const deleteCategory = async(req, res) => {
    const { id } = req.params;

    try {
        const skill = await Skill.findByIdAndDelete(id);

        if (!skill) {
            return res.status(404).json({ success: false, message: 'Skill category not found' });
        }

        res.status(200).json({ success: true, message: 'Skill category deleted successfully', skill });
    } catch (error) {
        console.error('Error deleting skill category:', error);
        res.status(500).json({ success: false, message: 'Failed to delete skill category' });
    }
  }

//   const editSkills = async(req, res) => {
//     const { id } = req.params;
//     const { title } = req.body;

//     try {
//         const updatedSkill = await Skill.findByIdAndUpdate(id, { title }, { new: true });

//         if (!updatedSkill) {
//             return res.status(404).json({ success: false, message: 'Skill category not found' });
//         }

//         res.status(200).json({ success: true, message: 'Skill category title updated successfully', skill: updatedSkill });
//     } catch (error) {
//         console.error('Error updating skill category title:', error);
//         res.status(500).json({ success: false, message: 'Failed to update skill category title' });
//     }
//   }


const editSkills = async (req, res) => {
    const { id } = req.params;
    const { title, skillsList } = req.body;

    try {
        const updatedSkillCategory = await Skill.findByIdAndUpdate(id, { title, skillsList }, { new: true });

        if (!updatedSkillCategory) {
            return res.status(404).json({ success: false, message: 'Skill category not found' });
        }

        return res.status(200).json({ success: true, message: 'Skill category updated successfully', skillCategory: updatedSkillCategory });
    } catch (error) {
        console.error('Error updating skill category:', error);
        return res.status(500).json({ success: false, message: 'Failed to update skill category' });
    }
};

  
module.exports = {
    addNewSkill,
    deleteSkill,
    deleteCategory,
    editSkills,
};