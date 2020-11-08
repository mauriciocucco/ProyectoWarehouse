const { modifyRegion } = require("../../models/region");

const modificarRegion = (req, res) => {

    modifyRegion(req.params.id, req.body)
    .then(r => res.status(200).send({mensaje: "La region fue modificada exitósamente"}))
    .catch(e => {

        if(e.kind === "ObjectId") return res.status(422).send({error: "El id es incorrecto"});

        res.status(500).send(e);
    })

}

module.exports = modificarRegion;