import express from "express";
import bodyParser from "body-parser";
import router from "../../../src/routes/routes";

export const createApp = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(router);

    return app;
};

