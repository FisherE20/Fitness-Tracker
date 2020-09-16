// workout schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    date: {
    type: Date,
    default: Date.now
},

    exercises: [
        {
            type: {
                type: String,
                trim: true
            },

            name: {
                type: String,
                trim: true
            },

            duration: {
                type: Number,
                trim: true
            },

            weight: {
                type: Number,
                trim: true
            },

            reps: {
                type: Number,
                trim: true
            },

            sets: {
                type: Number,
                trim: true
            },

            distance: {
                type: Number,
                trim: true
            }   
        }
    ]
    
    
}, {
    toJson: {
        virtuals: true
    }
}
);

WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercise.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const workout =  mongoose.model("Workout", WorkoutSchema);

module.exports = workout;