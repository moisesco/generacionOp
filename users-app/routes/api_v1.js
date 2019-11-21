const express = require('express');
const router = express.Router();

const User = require('../models/user');

//cuando mi servidor(router) obtenga una peticion(get) a la ruta users, lo manejamos con una consulta a la bd
router.get('/users',(req, res) => {
  User.find({}, (err,users) => {
      res.json(users);
  });
});

router.post('/users',(req, res) => {
  console.log(req.body);
  delete req.body._id;
  User.create(req.body, (err, user) => {
    if (err) {
      res.json(err);
    }
    else {
      res.json(user);
    }
  })
});

module.exports = router;
