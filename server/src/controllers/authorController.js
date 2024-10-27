const AuthorModel = require("../models/authorModel");
const jwt = require("jsonwebtoken");


const createAuthor = async (req, res) => {
  try {
    const author = await AuthorModel.create(req.body);
    return res.status(201).send({ status: true, message: author });
} catch (err) {
  res.status(500).send({ status: false, message: err.message });
}
};
 

// login api 

const loginAuthor = async (req, res) => {
  try {
    const { email, password } = req.body;
    let checkCredentials = await AuthorModel.findOne({ email: email, password: password });

    if (!checkCredentials) {
     return res.status(401).send({ status: false, message: "Wrong Credentials" });
    }
    const token = jwt.sign({authorId: checkCredentials._id.toString(), project1: 1, college: "PST",},"project1" );
  return res.status(200).send({status: true,msg: "Token has been generated",token: token,});
  } 
  catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};



const getAuthors = async (req, res) => {
  try {
    const authors = await AuthorModel.find(req.query); 
    res.status(200).send({ status: true, data: authors });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};


module.exports = {createAuthor , getAuthors , loginAuthor};