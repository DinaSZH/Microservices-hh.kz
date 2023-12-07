const express = require('express');
const router = express.Router();
const Role = require('../models/Role');
const User = require('../models/User');

// GET endpoint для получения всех ролей
router.get('/api/roles', async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.json(roles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

// GET endpoint для получения всех пользователей
router.get('/api/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});


module.exports = router;
