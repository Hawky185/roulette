import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
    info: {
        title: "Roulette API",
        description: "An API to allow users to play roulette"
    }
};

export const swaggerSpec = swaggerJSDoc({
    swaggerDefinition,
    apis: ["./src/routes/routes.js"]
});
