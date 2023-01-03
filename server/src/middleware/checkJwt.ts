import { Request, Response, NextFunction } from "express"
import * as jwt from "jsonwebtoken"
import {ENV} from "../my_env"

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  //Get the jwt token from the head
  const token = <string>req.headers.authorization
  let jwtPayload
  
  //Try to validate the token and get data
  try {

    if (!token) {
      throw new Error
    }
    const [, tokenSplitted] = token.split(' ');
    jwtPayload = <any>jwt.verify(tokenSplitted, ENV.jwtSecret)
    res.locals.jwtPayload = jwtPayload
      
    
  } catch (error) {
    //If token is not valid, respond with 401 (unauthorized)
    console.log(error)
    res.status(401).send()
    return
  }

  //The token is valid for 1 hour
  //We want to send a new token on every request
  // const { userId, pseudo, role } = jwtPayload
  // const newToken = jwt.sign({ userId, pseudo, role }, ENV.jwtSecret, {
  //   expiresIn: "1h"
  // })
  // res.setHeader("token", newToken)

  //Call the next middleware or controller
  next()
};