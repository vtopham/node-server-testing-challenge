// /api/descriptions

const express = require('express');
const Desc = require('./descriptions-model.js');
const router = express.Router();

router.use(express.json());

//get all descriptions
router.get('/', (req, res) => {
    Desc.get()
        .then(descriptions => {
            res.status(200).json({data: descriptions})
        })
        .catch(err => {
            res.status(500).json({message: "Error retrieving descriptions", error: err})
        })
    
});

//add a new description
router.post('/', (req, res) => {
    if(req.body && req.body.description) {
        Desc.insert(req.body)
            .then(([id]) => {
                res.status(201).json({data: `Description ${id} successfully created`})
            })
            .catch(err => {
                res.status(500).json({message: "Error creating description", error: err})
            })
    } else {
        res.status(400).json({message: "Please include a description in the body."})
    }
})

//remove a description
router.delete('/:id', validateId, (req, res) => {
   Desc.remove(req.params.id)
    .then(num => {
        res.status(200).json({message: `${num} records successfully deleted`})
    })
    .catch(err => {
        res.status(500).json({message: "Error deleting description", error: err})
    })
})

function validateId(req, res, next) {
    Desc.getById(req.params.id)
        .then(results => {
            if (results.length > 0) {
                next();
            } else {
                res.status(404).json({message: "id not found"})
            }
        })
        .catch(err => {
            res.status(500).json({message: "Error validating the id", error: err})
        })
}

module.exports = router;