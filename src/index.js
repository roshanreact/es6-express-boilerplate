import express from "express";
import { postAs } from "./Posts/Post.controller";

const router = express.Router();

router.get("/myname/:name/portfolio", (req, res) => {
  console.log(req.body);
  const name = req.params.name;
  return res.json({
    name: `Welcome ${name}`,
    status: 200,
  });
});
router.post("/myname", postAs);

// router.post("/myname", postAs);

export default router;
