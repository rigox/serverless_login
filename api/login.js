const Profile =  require("../models/Profile")
const colors =  require("colors")
const db =  require("../config/db")

//@Desc creates user
//@Route POST /api/user/
//@access public
exports.handler = async(event,context,cb) =>{
  try {
        db();

         const data = JSON.parse(event.body);
        
       const profile  = await   Profile.findOne({email:data.email})

       if(!profile){
        const response = {
            statusCode:401,
            body:JSON.stringify("profile not found") 
          }
  
          cb(null,response)
       }
  //if  profile is found
    

        cb(null,sendTokenResponse(profile))

  } catch (err) {
      throw err
  }
}


function sendTokenResponse(user,statusCode ,  res){
    const token = user.getSignedJwtToken();

    const options = {
        expires: new Date(Date.now()+30 *24 *60 *60*1000),
        httpOnly:true,
    }
    const response = {
        statusCode:200,
        body:JSON.stringify({success:true,token}) 
      }

      return response
    
}