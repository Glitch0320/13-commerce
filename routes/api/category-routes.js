const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  res.send('Connected')
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value

      // req.body => { id, 'category_name' }

  // be sure to include its associated Products
  res.send(req.params.id)
});

router.post('/', (req, res) => {
  // create a new category
  res.send(req.body)
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  res.send(req.params.id)
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  res.send(req.params.id)
});

module.exports = router;
