const express = require('express');

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../docs/swaggerDocument')

const swaggerHtml = swaggerUi.generateHTML(swaggerDocument)

const Routes = require('./routes/routes')

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    res.json({ status: true, message: "Hello Hello....... Hi" })
});

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
