module.exports = {
    create: (model) => async (req, res) => {
        try {
            const doc = await model.create(req.body)
            res.status(200).json({ data: doc })
        } catch{
            res.status(500).json({ message: "ERROR" })
        }
    },

    readOne: (model) => async (req, res) => {
        try {
            const doc = await model.findById(req.params.id)
            res.status(200).json({ data: doc })
        } catch{
            res.status(500).json({ message: "ERROR" })
        }

    },

    readMany: (model) => async (req, res) => {
        try {
            const doc = await model.find({ user_id: req.params.id })
            res.status(200).json({ data: doc })
        } catch{
            res.status(500).json({ message: "ERROR" })
        }

    },

    updateOne: (model) => async (req, res) => {
        try {
            const doc = await model.findOneAndUpdate({ id: req.headers.id }, req.body, { new: true })
            res.status(200).json({ data: doc })
        } catch{
            res.status(500).json({ message: "ERROR" })
        }

    },

    deleteOne: (model) => async (req, res) => {
        try {
            const doc = await model.deleteOne({ id: req.headers.id })
            res.status(200).json({ data: doc })
        } catch{
            res.status(500).json({ message: "ERROR" })
        }

    }
}