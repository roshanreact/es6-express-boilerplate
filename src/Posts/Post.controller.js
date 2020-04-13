export const postAs = (req, res) => {
  const headers = req.headers;
  const body = req.body;

  return res.json({
    status: 200,
    message: "Your post has been saved",
    postAs: `Posted as: ${headers.token} save as ${body.post}`,
  });
};
