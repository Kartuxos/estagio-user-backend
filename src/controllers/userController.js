const User = require('../models/User');

const userController = {
    store: async function (req, res) {


        const selectedUser = await User.findOne({ foneNumber: req.body.foneNumber });
        if (selectedUser) {
            return res.status(400).send('Telefone já existe');
        }

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            foneNumber: req.body.foneNumber,
            city: req.body.city,
            bairro: req.body.bairro,
            rua: req.body.rua,
            number: req.body.number,

        })

        try {
            const savedUse = await user.save();
            res.send(savedUse);

        } catch (error) {
            res.status(400).res(error);

        }
    },

    show: async function (req, res) {

        if (req.params.foneNumber) {
            const selectedUser = await User.findOne({ foneNumber: req.params.foneNumber });
            if (selectedUser) {
                return res.send(selectedUser);
            } else {
                return res.status(400).send("Usuário não existe")
            }
        } else {
            res.status(400).send("Digite um número")

        }

    },

}

module.exports = userController;