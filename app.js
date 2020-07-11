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
    res.render('projects', {footerClass: "", heading: "Projects", desc: "Check out some of my creations over here. I've worked on web apps, mobile apps, desktop programs, npm packages and a whole lot more."});
});

app.get('/resume-highlights', (req, res) => {
    res.render('projects', {footerClass: "", heading: "Resume Highlights", desc: ""});
});

app.get('/contact', (req, res) => {
    res.render('projects', {footerClass: "", heading: "Contact", desc: ""});
});

const port = 3303;
app.listen(port, () => console.log(`Ready: App active on port ${port}`));