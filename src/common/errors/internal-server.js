class InternalServerError extends Error {
    constructor(message, originalError) {
        super(message);
        this.name = this.constructor.name;
        this.originalError = originalError;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = InternalServerError;