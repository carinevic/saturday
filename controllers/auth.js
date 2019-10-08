let jwt = require('jsonwebtoken');
let secret = 'ohhappyday';

function generateToken(user){
    let payload = {
        email: user.email,
        password: user.password
    }
    jwt.sign(payload, secret )
}
function checkToken(token){
    jwt.verify(token, secret);
}

module.exports = { generateToken, checkToken}