const fs = require('fs');
const path = require('path');

const { logger } = require('../common/index');

const env = require('../config/environment');
const routesPath = path.join(__dirname, '../controllers');

const routes = [];

// Register all routes with application
function registerRoutes(app) {

    logger.log('Initialize routes registration');

    getRoutes(routesPath);

    routes.forEach((route) => {
        logger.log(`Route registered => ${route}`);
        app.use(env.BASE_URL, require(route));
    });

    logger.log('Routes registration complete');
}

// Get routes list
function getRoutes(directoryPath) {
    fs.readdirSync(directoryPath).forEach(file => {
        
        let fullPath = path.join(directoryPath, file);

        if (fs.statSync(fullPath).isDirectory()) {
            getRoutes(fullPath);
        } else if (path.extname(fullPath) == '.js') {
            routes.push(fullPath);
        }

    });
}

module.exports = registerRoutes;