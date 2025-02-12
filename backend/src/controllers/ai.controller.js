const generateContent = require("../services/ai.service");

const getReview = async (req, res) => {

  try {
    let { code } = req.body;
    if (!code) return res.status(400).json({ message: "Code is required" });
    const response = await generateContent(code);
    // console.log(response)
    return res.status(200).json({ response });

  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Something went wrong" });
  }
}

module.exports = getReview;