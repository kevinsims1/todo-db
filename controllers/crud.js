module.exports = {
    create: (model) => async (req, res) => {
        console.log(req.body)
       try {
            const doc = await model.create(req.body)
            console.log(doc)
            res.status(200).json({ data: doc })
        } catch(err){
            console.log("error", err)
            res.status(500).json({ message: err })
        }
    },

    readOne: (model) => async (req, res) => {
        try {
            const doc = await model.findById(req.params.id).exec()
            res.status(200).json({ data: doc })
        } catch{
            res.status(500).json({ message: "ERROR" })
        }

    },

    readMany: (model) => async (req, res) => {
        try {
            const doc = await model.find({ user_id: req.params.id }).exec()
            res.status(200).json({ data: doc })
        } catch{
            res.status(500).json({ message: "ERROR" })
        }

    },

    updateOne: (model) => async (req, res) => {
        try {
            const doc = await model.findOneAndUpdate({ id: req.headers.id }, req.body, { new: true }).exec()
            res.status(200).json({ data: doc })
        } catch{
            res.status(500).json({ message: "ERROR" })
        }

    },

    deleteOne: (model) => async (req, res) => {
        try {
            const doc = await model.deleteOne({ id: req.body }).exec()
            res.status(200).json({ data: doc })
        } catch{
            res.status(500).json({ message: "ERROR" })
        }

    },

    deleteMany: (model) => async (req, res) => {
        try {
            const doc = await model.deleteMany({ user_id: req.headers.id }).exec()
            res.status(200).json({ data: doc })
        } catch{
            res.status(500).json({ message: "ERROR" })
        }

    }
}
