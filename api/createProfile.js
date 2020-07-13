const Profile  =  require("../models/Profile")
const colors =  require("colors")
const db =  require("../config/db")

//@Desc creates user
//@Route POST /api/user/
//@access public
exports.handler = async(event,context,cb) =>{
  try {
        db();

        const data = JSON.parse(event.body);

        
        const profile =  await Profile.create(data)

        const response = {
          statusCode:201,
          body:JSON.stringify(profile) 
        }

        cb(null,response)

  } catch (err) {
      throw err
  }
}
