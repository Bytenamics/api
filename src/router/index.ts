import express from 'express';

import authentication from './authentication';
import users from './authentication';

const router = express.Router();

export default (): express.Router => {
    authentication(router);
    users(router);
    
    return router;
};