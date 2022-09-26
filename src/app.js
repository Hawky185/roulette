import express from "express";

import router from "./routes/routes";

import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "../docs/swagger";

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(router);

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
