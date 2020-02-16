
exports.getBootcamps = (req, res, next) => {
   res.status(200).json({ success: true, msg: "Show all bootcamps" })
}

exports.getBootcamp = (req, res, next) => {
   res.status(200).json({ success: true, msg: `Display bootcamp id ${req.params.id}` })
}

exports.createBootcamp = (req, res, next) => {
   res.status(200).json({ success: true, msg: "Add bootcamp" })
}

exports.updateBootcamp = (req, res, next) => {
   res.status(200).json({ success: true, msg: `update bootcamp id ${req.params.id}` })
}

exports.deleteBootcamp = (req, res, next) => {
   res.status(200).json({ success: true, msg: `Delete bootcamp id ${req.params.id}` })
}