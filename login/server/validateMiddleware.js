const jwt = require('jsonwebtoken');

const validateToken = async (req, res, next) => {

    // getting the token from the header
    const accessTokenn = await req.header('accessToken');
    // const accessTokenn = await req.get('accessToken');
    // const accessToken = tokenn.split(' ')[1];

    // console.log(accessTokenn)
    if (!accessTokenn) return res.status(401).json({ msg: 'Access Denied' });

    try {
        const validToken = jwt.verify(accessTokenn, 'mysecretkey');
        if (validToken) {
            next();
        }
    }
    catch (err) {
        res.status(400).json({ msg: 'Invalid Token' });
        console.log(err);
    }
}

module.exports = validateToken;
