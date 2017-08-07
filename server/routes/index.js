import express from 'express';
import account from './account';
import memo from './memo';
import video from './video';
import files from './files';

const router = express.Router();


router.use('/account', account);
router.use('/memo', memo);
router.use('/video', video);
router.use('/file', files);

export default router;