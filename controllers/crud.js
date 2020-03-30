const create = (model) => async (req,res) => {
    const doc = await model.create(req.body)
    res.status(200).json({ data: doc })
}

const readAll = (model) => async (req,res) => {
    const doc = await model.findById(req.params.id)
}