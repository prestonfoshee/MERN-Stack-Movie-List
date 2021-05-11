import Express, { json } from 'express';
import Database from './Database.js';
import CORS from 'cors';

const App = Express();
const port = 45030;

App.use(CORS());
App.use(Express.json());

const d = new Database();

d.connect("portfolio2", "PrestonFoshee");

App.put("/movies/:title", async (req, res) => {
    const title = req.params.title;
    const year = req.body.year;
    const director = req.body.director;
    const rating = req.body.rating;
    const description = req.body.description;
    const result = await d.createOne(title, year, director, rating, description);
    res.json(result);
});

App.get("/movies/:title", async (req, res) => {
    const title = req.params.title;
    const result = await d.readOne(title);
    res.json(result);
});

App.get("/count", async (req, res) => {
    const result = await d.readCount();
    res.json(result);
});

App.post("/movies/search", async (req, res) => {
    const year = req.query.year;
    const director = req.query.director;
    const result = await d.readMany(year, director);
    res.json(result);
});


App.patch("/movies/:title", async (req, res) => {
    const titleQuery = req.params.title;
    const titleUpdate = req.body.title;
    const year = req.body.year;
    const director = req.body.director;
    const rating = req.body.rating;
    const description = req.body.description;
    const result = await d.updateOne(titleQuery, titleUpdate, year, director, rating, description);
    res.json(result);
});

App.delete("/movies/:title", async (req, res) => {
    const title = req.params.title;
    const result = await d.deleteOne(title);
    res.json(result);
});

App.listen(port, () => {
    console.log("server running");
});
