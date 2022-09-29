import express from "express";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";

import { swaggerSpec } from "../docs/swagger";
import router from "./routes/routes";

const app = express();

app.use(bodyParser.json());
app.use(router);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => console.log("App listening at port 3000"));
