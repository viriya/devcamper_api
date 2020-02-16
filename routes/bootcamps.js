const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
   res.status(200).json({ success: true, msg: "Show all bootcamps" })
})

router.get('/:id', (req, res) => {
   res.status(200).json({ success: true, msg: `Display bootcamp id ${req.params.id}` })
})

router.put('/:id', (req, res) => {
   res.status(200).json({ success: true, msg: `update bootcamp id ${req.params.id}` })
})

router.post('/', (req, res) => {
   res.status(200).json({ success: true, msg: "Add bootcamp" })
})

router.delete('/:id', (req, res) => {
   res.status(200).json({ success: true, msg: `Delete bootcamp id ${req.params.id}` })
})

module.exports = router;