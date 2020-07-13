const Profile =  require("../models/Proifle.js")
const colors =  require("colors")
const db =  require("../config/db")

//@Desc creates user
//@Route POST /api/user/
//@access public
exports.handler = async(event,context,cb) =>{
  try {
        db();

        const data = event.body;
        
        const profile =  await profile.create(data)

        const response = {
          statusCode:201,
          body:JSON.stringify(profile) 
        }

        cb(null,response)

  } catch (err) {
      throw err
  }
}
