const  mongoose =  require("mongoose");
const  Schema =  mongoose.Schema

const profileSchemas =  new Schema({
      name:{
           type:String,
           required:[true,'name is required']
      },

      age:{
           type:Number,
           require:[true,'age is required']
      },
      DOB:{
           type:String,
           required:[true,'DOB is required']
      },
      bio:{
           type:String,
           required:[true,'bio is requiried']
      },
      createdAt:{
          type:String,
          default:  Date.now()
      }
      
});


module.exports = mongoose.model('profiles',profileSchemas)