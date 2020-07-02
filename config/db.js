  
const mongoose =  require("mongoose");
//const config =  require("config");
//const db  =  config.get('mongoURI')
MONGO_URI = 'mongodb+srv://rigo:0082522a@rigo-8gjwb.mongodb.net/test?retryWrites=true&w=majority'


const connectDB =  async()=>{
    console.log(process.env.MONGO_URI)

    try
     {
        await  mongoose.connect(MONGO_URI,{useUnifiedTopology:true,useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false})
        console.log(`Mongo DB Connected`.yellow.underline.bold)
    }catch(err){
             console.log(err)

             process.exit(1)
     }
}


module.exports  = connectDB;