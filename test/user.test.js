const { User } = require('../models/user');
const config = require('config');
const jwt = require('jsonwebtoken');

describe('user.generateAuthToken', () => {
    it('Should return a valid JWT', () => {
        const user = new User({ isAdmin: true });
        const token = user.generateAuthToken();
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        expect(decoded).toMatchObject({ _id: user._id.toHexString(), isAdmin: true });
    })
})