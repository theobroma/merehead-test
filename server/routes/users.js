import express from 'express';
import MOCK_DATA from './../../data/mock_data_users.json';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(MOCK_DATA.users);
});

export default router;
