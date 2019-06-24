const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const options = {
    swaggerOptions: {
        validatorUrl: null
    }
};

function registerSwagger(app) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
}

module.exports = registerSwagger;