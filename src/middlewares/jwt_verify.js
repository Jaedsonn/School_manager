import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export async function jwt_verify(req, res, next){
  try{
    const token = req.headers.authorization?.split(" ")[1]
    console.log(token)
    if(!token) {
      return res.status(401).json({ error: "Login required" });
    }
    // eslint-disable-next-line no-undef
    const decode = jwt.verify(token, process.env.SECRET);
    if(!decode) {
      return res.status(401).json({ error: "Invalid login" });
    }
    req.body = {
     ...req.body,
     user_email: decode.email,
     user_password: decode.password
    }
    next();
  }catch(error) {
    console.error("Error verifying token:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
