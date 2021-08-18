
import UserModel from '../models/user-model.js';

export const getAllUsers = async (req, res) => {
    
        await UserModel.find((err,results)=>{
            if(err) throw err;
            console.log("result:", JSON.stringify(results));
            res.status(200).json({success: true, data: results});
        });
    }
    export const getUser = async (req, res) => {
  
        let userId = req.params.id;
        await UserModel.findById(userId,(err,movieItem)=>{
            if(err) throw err;
            console.log("result:", JSON.stringify(movieItem));
            res.status(200).json({success: true, data: movieItem});
        });
    }

    export const removeUserById = async (req, res) => {

        let userId = req.params.id;
        await UserModel.findByIdAndRemove(userId,(err,doc)=>{
            if(err) throw err;
            
            res.status(201).json({success: true, data:doc, message:"movie delete success"})
                });
    }
    export const insertUser = async (req, res) => {

        let newUser = req.body.user;
        await UserModel.insertMany(newUser,(err,results)=>{
            if(err) throw err;
            
            res.status(201).json({success: true, data: results});
        });
    }
    export const updateUser = async (req, res) => {

        let userIdToChange = req.params.id
        let newUserInfo = req.body.user;
      
        await UserModel.findByIdAndUpdate(userIdToChange, newUserInfo, (err, doc)=>{
      if (err) throw err;
      res.status(300).json({success: true, data:doc, message:"user update success"})
        })
    }

    export const compereLog = async (req, res) => {

const {userEmail, userPassword} = req.body.logInfo
    await UserModel.findOne({userEmail, userPassword}, (err,result)=>{
        if(err) throw err;
        if(result) res.status(200).json({success: true, data: result, message: 'user exists'})
        else res.status(400).json({success: false, message: 'user not exists'})
    })

   }

