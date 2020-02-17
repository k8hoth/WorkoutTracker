const router = require("express").Router();
const Workout = require("../models/workoutInput.js");

router.get("/api/workoutInput", (req, res) => {
    Workout.find()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json(err))
});

router.get("/api/workoutInput/range", (req, res) => {
    Workout.find()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json(err))
});

router.post("/api/workoutInput", (req, res) => {
    Workout.create(req.body)
        .then(data => res.status(201).json(data))
        .catch(err => res.status(422).json(err))
});

router.put("/api/workoutInput/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, { $push: {exercises: req.body} }, { new: true })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(422).json(err))
});

module.exports = router;