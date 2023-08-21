import mongoose from "mongoose"

const DBConnection = async() => {
    const MONGODB_URI="mongodb+srv://kalp9197:kalp1234@file-sharing.ghqmtl6.mongodb.net/?retryWrites=true&w=majority"
    try{
      await mongoose.connect(MONGODB_URI,{useNewUrlParser : true})
        console.log("Database Connected Successfully")
    }
    catch{
        console.error("Error while connecting the database",error.message)
    }
}

export default DBConnection