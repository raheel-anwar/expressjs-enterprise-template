const moment = require('moment');
const colors = require('colors/safe');

module.exports = {

    log(message) {
        console.log(colors.white(`${moment()}: INFO: ${message}`));
    },
    
    warn(message) {
        console.log(colors.yellow(`${moment()}: WARN: ${message}`));
    },

    error(message) {
        console.log(colors.red(`${moment()}: ERROR: ${message}`));
    },

    fatal(message) {
        console.log(colors.red(`${moment()}: FATAL: ${message}`));
    },

    debug(message) {
        console.log(colors.white(`${moment()}: DEBUG: ${message}`));
    }

}