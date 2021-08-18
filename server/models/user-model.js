import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const User = new Schema(
  {
    userEmail: String,
    userPassword:String,

  },
  
 {
    type: Date,
    default: new Date()
}
  
);
const UserModel = mongoose.model('UserModel',User) ;

export default UserModel;