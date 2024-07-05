const router = require("express").Router();
const {
  Intro,
  About,
  Skill,
  Experience,
  Project,
  Education,
} = require("../models/portfolioModel");

const User = require('../models/adminUserModel');

router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const skills = await Skill.find();
    const experiences = await Experience.find();
    const projects = await Project.find();
    const educations = await Education.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      projects: projects,
      skills: skills,
      experiences: experiences,
      educations: educations,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

// update intro

router.post("/update-intro", async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro Updated Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// update about

router.post("/update-about", async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: about,
      success: true,
      message: "Aout Updated Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});



// add experience
router.post("/add-experience", async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience added successfully"
    })
  } catch (error) {
    res.status(500).send(error);
  }
});

//update experiance
router.post('/update-experience', async (req, res) =>{
  try {
    const experiance =  await Experience.findByIdAndUpdate(
      {_id: req.body._id},
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: experiance,
      success: true,
      message: "Experience updated successfully"
    })
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete experience
router.post("/delete-experience", async (req, res) => {
  try {
    const experiance = await Experience.findOneAndDelete({_id: req.body._id});
    res.status(200).send({
      data: experiance,
      success: true,
      message: "Experience deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//add education
router.post("/add-education", async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    res.status(200).send({
      data: education,
      success: true,
      message: "Education added successfully"
    })
  } catch (error) {
    res.status(500).send(error);
  }
});

//update education
router.post('/update-education', async (req, res) =>{
  try {
    const education =  await Education.findByIdAndUpdate(
      {_id: req.body._id},
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: education,
      success: true,
      message: "Education updated successfully"
    })
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete education
router.post("/delete-education", async (req, res) => {
  try {
    const education = await Education.findOneAndDelete({_id: req.body._id});
    res.status(200).send({
      data: education,
      success: true,
      message: "Education deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});



// add project
router.post("/add-project", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(200).send({
      data: project,
      success: true,
      message: "Project added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//update project
router.post('/update-project', async (req, res) =>{
  try {
    const project =  await Project.findOneAndUpdate(
      {_id: req.body._id},
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: project,
      success: true,
      message: "Project updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete project
router.post("/delete-project", async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({_id: req.body._id});
    res.status(200).send({
      data: project,
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/login" ,async (req, res) => {

  try {
    const user = await User.findOne({ username : req.body.username, password : req.body.password });
    user.password = "";
    if(user){
      res.status(200).send({
        data: user,
        success: true,
        message: "Login successfull"
      });
    }
    else {
      res.status(200).send({
        data: user,
        success: false,
        message: "Invalide username or password",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});


module.exports = router;
