const moment = require('moment');
const colors = require('colors/safe');

module.exports = {

    log(message) {
        console.log(`${colors.green(moment().toString())}: ${colors.cyan('INFO')}: ${message}`);
    },
    
    warn(message) {
        console.log(`${colors.green(moment().toString())}: ${colors.yellow('WARN')}: ${message}`);
    },

    error(message) {
        console.log(`${colors.green(moment().toString())}: ${colors.red('ERROR')}: ${message}`);
    },

    fatal(message) {
        console.log(`${colors.green(moment().toString())}: ${colors.red('FATAL')}: ${message}`);
    },

    debug(message) {
        console.log(`${colors.green(moment().toString())}: ${colors.yellow('DEBUG')}: ${message}`);
    }

}