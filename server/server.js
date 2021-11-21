require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

app.use(cors());
app.use(express.json());

//get all states
//http://localhost:3005/api/v1/states
app.get("/api/v1/countries", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            state: ["Arizona"],
        },
    });
});

//get one state
//http://localhost:3005/api/v1/states/:id

app.get("/api/v1/countries/:id", (req, res) => {
    console.log(req.params);

    res.status(200).json({
        status: "success",
        data: {
            state: "USA"
        }
    });
}); 

//create a state
app.post("/api/v1/countries/", (req, res) => {
    console.log(req.params);

    res.status(201).json({
        status: "success",
        data: {
            state: "USA"
        }
    });
});

//Update states
app.put("/api/v1/countries/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);

    res.status(200).json({
        status: "success",
        data: {
            state: "USA"
        }
    });
});

//Delete a state
app.delete("/api/v1/countries/:id", (req, res) => {
    res.status(204).json({
        status: "success"
    });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
