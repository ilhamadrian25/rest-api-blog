import PostModel from "../model/PostModel.js";
import UserModel from "../model/UserModel.js";

export const getAllPost = async (req, res) => {
  try {
    const response = await PostModel.findAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const getPostByUser = async (req, res) => {
  const username = req.params.username;

  try {
    const response = await UserModel.findOne({
      where: {
        username: username,
      },
      attributes: ['id', 'username', 'name'],
      include: {
        model: PostModel,
        // attributes: ["name"],
      },
    });
    
    return res.status(200).json(response)
  } catch (error) {
    return res.status(400).json({message: error})
  }
};
