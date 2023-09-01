import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;

<<<<<<< HEAD
    const MONGO_URI =`mongodb+srv://${USERNAME}:${PASSWORD}@file-sharing.ghqmtl6.mongodb.net/?retryWrites=true&w=majority`
=======
    const MONGO_URI ="mongodb+srv://kalp9197:kalp1234@file-sharing.ghqmtl6.mongodb.net/?retryWrites=true&w=majority"
>>>>>>> 6d1c1cf80c7406f8561c8a4ad6f833156d1c01e8
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;
