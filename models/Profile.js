const  mongoose =  require("mongoose");
const bcrypt =  require('bcryptjs')
const  jwt =  require("jsonwebtoken")
const  Schema =  mongoose.Schema

const userSchema =  new Schema({
      name:{
           type:String,
           required:[true,'name is required']
      },

      email:{
           type:String,
           require:[true,'email is required']
      },
      password:{
           type:String,
           maxlength:[6,"password must be 6 characters long"],
           required:[true,'password is requiried'],
      },
      createdAt:{
          type:String,
          default:  Date.now()
      }
      
});

//Add Ecrypt password
userSchema.pre('save',async function(next){

    if(!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10)

    this.password = await bcrypt.hash(this.password,salt)

     
});

//get signed token
userSchema.methods.getSignedJwtToken = function(){
      return jwt.sign({id:this._id},'water7',{expiresIn:'40d'})
}


//Matc user enter password to hash password in databsse
userSchema.methods.matchPasswords =  async function(enteredPass){
     return await bcrypt.compare(enteredPass,this.password)
}

module.exports = mongoose.model('users',userSchema)