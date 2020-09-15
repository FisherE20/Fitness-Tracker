const{data} = require("express")
const db = require("../models")

module.exports = function(app) {

// show the stats of all past workouts on stat page
app.get("/api/workouts", (req,res) => {
    db.Workout.find({}).then(function (data) {
        res.json(data);
    })
});

// update a workout by id
app.put("/api/workouts/:id", (req, res) => {
    let input = req.body;
    
    db.Workout.findByIdAndUpdate(req.params.id,{
        $push: {
            exercises:[{
                "type": input.type,
                "name": input.name,
                "duration": input.duration,
                "distance": input.diration,
                "weight": input.weight,
                "reps": input.reps,
                "sets": input.sets
            }]
        }
    }).then(function (data) {
        res.json(data);
    })
});

app.get("/api/workouts/range", (req,res) => {
    db.Workout.find({}).then(function (data) {
        res.json(data);
    })
});

// add a new workout
app.post("/api/workouts", ({body}, res) => {
    db.Workout.create(body).then(function (data) {
        res.json(data);
    })
});

// find all workouts
app.get("all", function(req,res) {
    db.Workout.find({}), (error,data) => {
        if (err){
            res.send(error)
            }else{
                res.json(data);
            }
        }
    });
};

