const { Db } = require("mongodb")

// show the stats of all past workouts on stat page
app.get("/api/workouts", (req,res) => {
    Db.Workout.find({}).then(function (data) {
        res.json(data);
    })
});

// display excercise page
app.get("/stats", (req,res) => {
    res.sendFile(path.join(_dirname, "./public/stats.html"))
});

// update a workout by id
app.put("/api/workouts/:id",(req,res) => {
    db.Workout.findByIdAndUpdate(req.parms.id,{
        $push: {exercises:req.body}
    }).then(function (data) {
        res.json(data);
    })
});

app.get("/api/workouts/range", (req,res) => {
    db.Workout.fing({}).then(function (data) {
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