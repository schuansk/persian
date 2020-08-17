const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports = function authMiddleware(req, res, next) {
    const { authorization } = req.headers;

    if(!authorization) {
        return res.status(401).json({
            error: '✋ Unauthorized'
        });
    }

    const token = authorization.replace('Bearer', '').trim();

    try {
        const data = jwt.verify(token, process.env.PRIVATEKEY);

        const { id, name } = data;

        req.userId = id;

        return next();
    } catch {
        return res.status(401).json({
            error: '✋ Unauthorized'
        });
    }
}