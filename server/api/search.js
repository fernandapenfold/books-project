const router = require("express").Router();
const axios = require("axios");
module.exports = router;

// GET /api/search
router.get("/", async (req, res, next) => {
  try {
    // const searchString = `q=${req.query.q}`;
    const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${process.env.GOOGLE_API_KEY}`);
    console.log(data)
    res.send(data);
  } catch (error) {
    next(error);
  }
})