const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const categories = await Category.findAll()
  res.send(categories)
});

router.get('/:id', async (req, res) => {
  const category = await Category.findByPk(req.params.id)
  res.send(category)
});

router.post('/', (req, res) => {
  Category.create(req.body)
});

router.put('/:id', (req, res) => {
  Category.update(req.body, { where: { id: req.params.id } })
});

router.delete('/:id', (req, res) => {
  Category.destroy({ where: { id: req.params.id } })
});

module.exports = router;
