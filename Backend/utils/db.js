import mongoose from "mongoose"

const connectDB = async()=> {
    try{ const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log('Mongodb connected successfully')
        
      } catch(error){
        console.log("Unable to connect to database")
        setTimeout(dbConnection, 5000)
    }
}

export default connectDB