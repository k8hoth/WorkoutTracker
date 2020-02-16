const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: DataCue,
        default:Date.now
    }
    exercise: [{
        type: {
            type: String,
            trim: true,
            required: "Type of exercise"
        },
        name: {
            type: String,
            trim: true,
            required: "Name of exercise"
        },
        duration: {
            type: Number,
            required: "Duration of exercise"
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }] 
});
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;