// Built by Dhruv
const express = require('express');
const app = express();

app.use('/static', express.static('views/static'));
app.set("views", "./views")
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', {footerClass: "lg-footer", heading: "Hello, World_", desc: "I’m Dhruv Malik – an undergraduate at UBC, dedicated problem solver and software developer. I have specialized knowledge in application security & human-computer interaction."});
});

app.get('/projects', (req, res) => {
    res.render('projects', {footerClass: "lg-footer", heading: "Projects", desc: "Check out some of my creations over here. I've worked on web apps, mobile apps, desktop programs, npm packages and a whole lot more."});
});

app.get('/resume-highlights', (req, res) => {
    res.render('resume-highlights', {footerClass: "", heading: "Resume Highlights", desc: `Here's a quick overview of my resume. Want to get in touch or know more:`});
});

app.get('/contact', (req, res) => {
    res.render('contact', {footerClass: "", heading: "Contact", desc: "Let's get in touch! I'll get back to you as soon as I can."});
});

const port = 3303;
app.listen(port, () => console.log(`Ready: App active on port ${port}`));