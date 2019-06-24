const express = require('express');
const router = express.Router();

const moment = require('moment');

router.get('/api/v1/users', function (req, res, next) {
    return res.json([
        {
            name: 'John Doe',
            username: 'john.doe',
            timestamp: moment()
        },
        {
            name: 'Marry Smith',
            username: 'marry.smith',
            timestamp: moment()
        },
        {
            name: 'Anthony Lew',
            username: 'anthony.lew',
            timestamp: moment()
        }
    ]);
});

module.exports = router;
