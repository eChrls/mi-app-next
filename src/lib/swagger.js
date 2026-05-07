import swaggerJsdoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Mi API Next.js",
            version: "1.0.0",
            description: "Documentación de la API creada con Next.js y Swagger",
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Servidor de desarrollo",
            },
        ],
    },
    apis: ["./src/app/api/**/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
