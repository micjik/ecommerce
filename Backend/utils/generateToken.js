import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const generateToken = (res, userId)=> {
    const token = jwt.sign({userId}, process.env.PRIVATE_SECURITY, {
        expiresIn: "10day"
    });

    res.cookie('jwt', token,{
        httpOnly:true,
        secure: process.env.PRIVATE_SECURITY !== "development",
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000

    })
}

export default generateToken;