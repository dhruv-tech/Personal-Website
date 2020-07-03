// Built by Dhruv
const express = require('express');
const app = express();

app.use('/static', express.static('views/static'));
app.set("views", "./views")
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', {heading: "Hello, World_", desc: "I’m Dhruv Malik – an undergraduate at UBC, dedicated problem solver and software developer. I have specialized knowledge in application security & human-computer interaction."});
});

const port = 3303;
app.listen(port, () => console.log(`Ready: App active on port ${port}`));