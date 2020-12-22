const express = require('express');
const fetch = require('node-fetch');
const Bluebird = require('bluebird');
fetch.Promise = Bluebird;
const router = express.Router();

// GET all artcicles
router.get('/obtener-items', async (req, res) => {
  const q = req.query.q;
  const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${q}`, { "method": "GET"});
  const data = await response.json(); 
  res.json(data);
});

// Get Article
router.get('/obtener-item', async (req, res) => {
  const id = req.query.id;
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`, { "method": "GET"});
  const data = await response.json(); 
  res.json(data);
});

module.exports = router;