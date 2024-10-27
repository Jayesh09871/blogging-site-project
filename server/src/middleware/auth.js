const AuthorModel = require("../models/authorModel");
const jwt = require("jsonwebtoken");

// middleware are the function which have access , next 

const authenticate = async function (req, res, next) {
  try {
    const token = req.Headers["x-api-key"] || req.Headers["X-Api-Key"];
    if(!token){
      return res.status(400).send({ status: false, message: "Token must be present" });
    }
    const decodedToken = jwt.verify(token, "project1");
    if (!decodedToken){
        return res.status(400).send({ status: false, message: "Invalid token" });
    }
    req.token = decodedToken;
    next();

  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};



module.exports = { authenticate};