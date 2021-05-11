import MongoClient from 'mongodb';

const URL = "mongodb+srv://PrestonFoshee:RqVd4VeRgSe9gDNO@cluster0.yuzwq.mongodb.net";

export default class Database {
    constructor() {
        this.connection = null;
        this.database = null;
        this.collection = null;
    }

    async connect(database, collection) {
        this.connection = await MongoClient.connect(URL, { useUnifiedTopology: true });
        this.database = this.connection.db(database);
        this.collection = this.database.collection(collection);
    }

    async createOne(title, year, director, rating, description) {
        if (this.collection !== null) {
            const result = await this.collection.insertOne({
                "title": title,
                "year": year,
                "director": director,
                "rating": rating,
                "description": description
            });
            return result.ops;
        }
    }

    async readOne(title) {
        if (this.collection !== null) {
            const result = await this.collection.findOne({ "title": title });
            if (result !== null) {
                return result;
            } else {
                return { "movie": "not found" };
            }
        }
    }

    async readMany(year, director) {
        if (this.collection !== null) {
            if (year !== undefined) {
                const result = await this.collection.find({ "year": year }).toArray();
                return { "movies": result[0] };
            } if (director !== undefined) {
                const result = await this.collection.find({ "director": director }).toArray();
                return { "movies": result[0] };
            }
        } else {
            return { "error": "error" };
        }
    }

    async updateOne(titleQuery, titleUpdate, year, director, rating, description) {
        if (this.collection != null) {
            const query = { "title": titleQuery };
            const update = {
                $set: {
                    "title": titleUpdate,
                    "year": year,
                    "director": director,
                    "rating": rating,
                    "description": description
                }
            };
            const options = { returnNewDocument: true, returnOriginal: false };
            const result = await this.collection.findOneAndUpdate(query, update, options);
            return result.value;
        } else {
            return { "update": "failed" };
        }
    }

    async readCount() {
        if (this.collection != null) {
            const result = await this.collection.count();
            return { "count": result };
        } else {
            return { "count": "error" };
        }
    }

    async deleteOne(title) {
        if (this.collection != null) {
            const result = await this.collection.deleteOne({ "title": title });
            return { "deleted": result.deletedCount };
        } else {
            return { "deleted": 0 };
        }
    }

    async close() {
        if (this.connection != null) {
            this.connection.close();
        }
    }
};