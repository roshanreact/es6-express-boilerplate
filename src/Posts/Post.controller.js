import PostModel from "./Post.models";

// Get Post by Id
export const getPost = async (req, res) => {
  try {
    console.log(req.body);
    const id = req.params.id;

    const fetchPost = await PostModel.findById(id);

    return res.json({
      post: fetchPost,
      status: 200,
    });
  } catch (error) {
    console.log(error);
    res.statusCode = 400;
    return res.json({
      status: 400,
      error: `Error: ${error.message}`,
    });
  }
};

// Get all Posts
export const getAllPosts = async (req, res) => {
  try {
    console.log(req.body);
    const fetchPost = await PostModel.find();

    return res.json({
      post: fetchPost,
      status: 200,
    });
  } catch (error) {
    console.log(error);
    res.statusCode = 400;
    return res.json({
      status: 400,
      error: `Error: ${error.message}`,
    });
  }
};

export const postAs = async (req, res) => {
  try {
    const headers = req.headers;
    const body = req.body;

    const newPost = new PostModel({ post: body.post, author: body.author });
    console.log(newPost);
    await newPost.save();

    return res.json({
      status: 200,
      message: "Your post has been saved",
      postAs: `Posted as: ${headers.token} save as ${body.post}`,
    });
  } catch (error) {
    console.log(error);
    res.statusCode = 400;
    return res.json({
      status: 400,
      message: "Your post has been saved",
      error: `Error: ${error.message}`,
    });
  }
};
