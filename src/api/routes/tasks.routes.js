const router = require('express').Router()

const tasks = []

// Obtener todas las tareas
router.get('/', (req, res) => {
    res.status(200).json({ result: tasks })
})

// Agregar una tarea
router.post('/', (req, res) => {
    tasks.push(req.body);
    res.status(201).json({ result: "task added 💯" })
})

// Actualizar una tarea
router.put('/:id', (req, res) => {
    const id = req.params.id
    if(id >= tasks.length) return res.status(400).json({ result: "bad index, out of range." })
    tasks[id] = req.body;
    res.status(201).json({ result: tasks })
})

// Eliminar una tarea
router.delete('/:id', (req, res) => {
    const id = req.params.id
    if(id >= tasks.length) return res.status(400).json({ result: "bad index, out of range." })
    tasks.splice(id, 1);
    res.status(201).json({ result: tasks })
})

module.exports = router