function errorHandler(app) {

    app.use((req, res, next) => {
        return res.json({
            status: 'Not Found',
            statusCode: 404
        });
    });

    app.use((err, req, res, next) => {
        return res.status(500).json({
            status: 'Internal Server Error',
            statusCode: 500,
            message: err.message
        });
    });

}

module.exports = errorHandler;