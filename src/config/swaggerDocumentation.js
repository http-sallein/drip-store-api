import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'DripStore API | Ecommerce',
            version: '1.0.0',
            description: 'API Documentation for dripStore ecommerce',
            contact: {
                name: 'DevSaLLein',
                email: 'devzac.andrade@gmail.com',
                github: 'https://github.com/DevSaLLein'
            }
        },
        
        servers: [{
            url: 'http://localhost:3000/api/v1',
            description: 'local server'
        }],

        components: {
            securitySchemes: {
                BearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        
        security: [
            {
                BearerAuth: []
            }
        ]
    },
    apis: ['src/routes/*.js'],
};

export const swaggerSpec = swaggerJsdoc(options);

export const swaggerDocs = (app) => {
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
