import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Roulette API",
        description: "An API to allow users to play roulette"
    }
};

export const swaggerSpec = swaggerJSDoc({
    swaggerDefinition,
    apis: ["./src/routes/routes.js"]
});
