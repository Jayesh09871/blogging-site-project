const express = require('express');
const router = express.Router();

const { createAuthor, getAuthors , loginAuthor} = require('../controllers/authorController');
const { createBlog, getPublishedBlogs, updateBlog, deleteBlog } = require('../controllers/blogController');
const middleware = require("../middleware/middleware");
router.post('/authors', createAuthor);
router.get('/getauthors', getAuthors);

router.post('/login',loginAuthor);

router.post('/blogs', createBlog);
router.get('/getblogs', getPublishedBlogs);
router.put('/blogs/:blogId', updateBlog);
router.delete('/blogs/:blogId', deleteBlog);

module.exports = router;