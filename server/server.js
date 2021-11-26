require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const db = require("./db")
app.use(cors());
app.use(express.json());

//get all states
//http://localhost:3005/api/v1/countries
app.get("/api/v1/countries", async (req, res) => {
    try {
        const results = await db.query("select * from country");
        //console.log(results);
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                countries: results.rows,
            },
        });
    } catch (error) {
        console.log(error);
    }
});

//get one state
//http://localhost:3005/api/v1/countries/:id

app.get("/api/v1/countries/:id", async (req, res) => {
    console.log(req.params.id);
    try {
        const results = await db.query("select * from country where country_name = $1", [req.params.id]);
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                countries: results.rows,
            },
        });
    } catch (error) {
        console.log(error);
    }
}); 

//create a country
app.post("/api/v1/countries/", (req, res) => {
    console.log(req.params);

    res.status(201).json({
        status: "success",
        data: {
            state: "USA"
        }
    });
});

//Update countries
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

//Delete a country
app.delete("/api/v1/countries/:id", (req, res) => {
    res.status(204).json({
        status: "success"
    });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
