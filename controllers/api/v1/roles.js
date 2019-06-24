const express = require('express');
const router = express.Router();

router.get('/api/v1/roles', function (req, res, next) {
    return res.json({
        roles: ['admin', 'guest', 'manager', 'anonymous']
    });
});

module.exports = router;
