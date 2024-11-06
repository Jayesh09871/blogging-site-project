const BlogModel = require("../models/blogModel");


const createBlog = async (req, res) => {
  try {
    const blog = await BlogModel.create(req.body);
    return res.status(201).send({ status: true, data: blog , message: "blog created successfully" });
  } catch (err) {
    res.status(500).send({ status: false, message: err });
  }
};


const getPublishedBlogs = async (req, res) => {
  try {
    const getblogs = await BlogModel.find(req.query);
    return res.status(201).send({ status: true, message: getblogs });
} catch (err) {
  res.status(500).send({ status: false, message: err });
}
};


const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.blogId, req.body);
    return res.status(200).send({ status: true, message: updatedBlog });
  } catch (err) {
    res.status(500).send({ status: false, message: err });
  }
};


const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await BlogModel.findByIdAndDelete(req.params.blogId);
      return res.status(404).send({ status: true, message:deletedBlog });
  } catch (err) {
    res.status(500).send({ status: false, message: err });
  }
};



module.exports = { createBlog, getPublishedBlogs, updateBlog, deleteBlog };