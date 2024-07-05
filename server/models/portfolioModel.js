const mongoose = require('mongoose');

const introSchema = new mongoose.Schema({
    welcomText: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },
    description: {  
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    resumeUrl: {
        type: String,
        required: true,
    }
});

const aboutSchema = new mongoose.Schema({
    lottieURL: {
        type: String,
        required: true,
    },
    description1: {
        type: String,
        required: true,
    },
    description2: {
        type: String,
        required: true,
    },
});

const skillsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    skillsList: [{
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    }],
});

const experienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    period: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    }, 
    description: {
        type: String,
        required: true,
    }
});

const educationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    period: {
        type: String,
        required: true,
    },
    institution: {
        type: String,
        required: true,
    }, 
    description: {
        type: String,
        required: true,
    }
});

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    period: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    link1: {
        type: String,
        required: true,
    },
    link2: {
        type: String,
        required: true,
    },
    technologies: {
        type: [String],
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
});

const contactSchema = new mongoose.Schema({
    // Define necessary fields for the contact schema if needed
});

const Intro = mongoose.model('intros', introSchema);
const About = mongoose.model('abouts', aboutSchema);
const Skill = mongoose.model('skillskkk', skillsSchema);
const Experience = mongoose.model('experiences', experienceSchema);
const Project = mongoose.model('projects', projectSchema);
const Education = mongoose.model('educations', educationSchema);

module.exports = {
    Intro: Intro,
    About: About,
    Skill: Skill,
    Experience: Experience,
    Project: Project,
    Education: Education,
};
