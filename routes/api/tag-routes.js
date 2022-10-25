const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  const tags = await Tag.findAll()
  res.send(tags)
});

router.get('/:id', async (req, res) => {
  const tag = await Tag.findByPk(req.params.id)
  res.send(tag)
});

router.post('/', (req, res) => {
  Tag.create(req.body)
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, { where: { id: req.params.id } })
});

router.delete('/:id', (req, res) => {
  Tag.destroy({ where: { id: req.params.id } })
});

module.exports = router;
