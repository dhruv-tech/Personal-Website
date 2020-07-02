// Built by Dhruv
const express = require('express');
const app = express();

app.use('/static', express.static('views/static'));
app.set("views", "./views")
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', {heading: "Hello, World_", desc: "Hi, I’m Dhruv, currently a CS student at UBC and former intern at Tata Consultancy Services and MyGov India. I conceive, develop and design software systems."});
});

const port = 3303;
app.listen(port, () => console.log(`Ready: App active on port ${port}`));