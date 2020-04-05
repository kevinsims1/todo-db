module.exports = {
    create: (model) => async (req, res) => {
       try {

            const doc = await model.create(req.body)
            
            res.status(200).json({ data: doc })

        } catch(err){

            res.status(500).json({ message: err })

        }
    },

    readOne: (model) => async (req, res) => {
        try {

            const doc = await model.findById(req.params.id).lean().exec()

            res.status(200).json({ data: doc })

        } catch{

            res.status(500).json({ message: "ERROR" })

        }

    },

    readMany: (model) => async (req, res) => {
        try {

            const doc = await model.find({ user_id: req.params.id }).lean().exec()

            res.status(200).json({ data: doc })

        } catch{

            res.status(500).json({ message: "ERROR" })

        }

    },

    updateOne: (model) => async (req, res) => {
        try {

            const {id, ...body} = req.body
            
            const doc = await model.findOneAndUpdate({ _id: id }, body, { new: true }).lean().exec()

            res.status(200).json({ data: doc })

        } catch{

            res.status(500).json({ message: "ERROR" })

        }

    },

    deleteOne: (model) => async (req, res) => {
        try {

            const doc = await model.findOneAndDelete({ _id: req.body._id }).exec()

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
