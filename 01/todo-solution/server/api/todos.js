const router = require('express').Router()
const { Todo } = require('../db').models

// GET /api/todos
router.get('/', async (req, res, next) => {
  try {
    res.send(await Todo.findAll())
  } catch (error) {
    next(error)
  }
})

// GET /api/todos/:id
router.get('/:id', async (req, res, next) => {
  try {
    // console.log('get')
    const todo = await Todo.findByPk(req.params.id)
    // console.log('todo', todo);
    res.send(todo)
  } catch (error) {
    next(error)
  }
})

// POST /api/todos
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Todo.create(req.body))
  } catch (error) {
    next(error)
  }
})

// PUT /api/todos/:id
router.put('/:id', async (req, res, next) => {
  try {
    // console.log('made it to put');
    const todo = await Todo.findByPk(req.params.id)
    // console.log('put todo', todo);
    res.send(await todo.update(req.body))
  } catch (error) {
    next(error)
  }
})

// DELETE /api/todos/:id
router.delete('/:id', async (req, res, next) => {
  try {
    console.log('delete route')
    const todo = await Todo.findByPk(req.params.id)
    await todo.destroy()
    res.send(todo)
  } catch (error) {
    next(error)
  }
})

module.exports = router
