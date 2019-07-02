module.exports = {
    logger: require('./utils/logger'),

    // Global application errors
    BadInputError: require('./errors/bad-input'),
    ResourceNotFoundError: require('./errors/not-found'),
    InternalServerError: require('./errors/internal-server'),
    ResourceAlreadyExistsError: require('./errors/already-exists')
}