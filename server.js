const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require("./app/models");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

db.sequelize.sync().then(() => {
    console.log("re-sync db.");
});

app.get("/", (req, res) => {
    res.json({message: "Welcome to bezkoder application."});
});

require("./app/routes/turorial.routes")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
});