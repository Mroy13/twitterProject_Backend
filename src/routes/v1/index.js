import express from 'express';
import { info  } from '../../controllers/info-controller.js';
import Routes from './routesname-routes.js';
const router=express.Router();
router.use('/',Routes);
router.get('/info',info);
export default router;
