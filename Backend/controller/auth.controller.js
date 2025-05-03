import User from "../model/user.model.js";
import generateToken from "../utils/generateToken.js";


//REGISTER
//ROUTE POST //api/register
//@PUBLIC ACCESS

const RegisterUser = async(req, res)=> {
    const {name, email, password} = req.body

    try{

        const userExist = await User.findOne({email})

        if(userExist){
            res.status(400).json({
                sucess: false,
                message: "user Already Exist"
            })

           const user = await User.create({
            name, email, password
           }) 

           if(user){
            generateToken(user.id, res);
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email

            })
           }
        }


    }catch(error){
        res.status(400).json({
            sucess: false,
            message: "Invalid user"
        })
    }
}

// LOGIN
// ROUTE POST
//PUBLIC ACCESS
 
const loginUser = async(req, res)=> {
    const{ email, password} = req.body
    try{
        const user = await User.findOne({email})

        if(user && await (user.validPassword(password))) {
            generateToken(res, user._id);
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email
            })

        }

    }catch(error){
        res.status(400).json({
            success: false,
            message: "Invalid email or password"
        })
    }
}

//LOGOUT
//@PUBLIC ACCESS
//ROUTE POST /api/v1/auth/logout

const logoutUser = async(req, res)=> {
    try {
        res.cookie("jwt", "", {
            httpOnly: true,
            expires: new Date(0)
        })
        res.status(200).json({success: true, message: "user successfully Logout"})
    }catch(error){
        res.status(400).json({
            success: false,
            message: "Error while logging out"
        })
    }
}

export {logoutUser, loginUser, RegisterUser}