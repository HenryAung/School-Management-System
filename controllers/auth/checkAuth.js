const jwt = require('jsonwebtoken')

exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization'] || req.body.jwtToken;
    if (!token) {
        req.user = null; // No user is logged in
        return next();
    }

    try {
        const verifiedUser = jwt.verify(token, secretKey);
        req.userData = verifiedUser; // User is logged in
        next();
    } catch (error) {
        req.user = null; // Token is invalid, treat as no user logged in
        next();
    }
};

