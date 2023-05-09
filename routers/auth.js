import express  from "express"
const router = express.Router();

import { Register, Login , Logout , get ,post , deletedata , getdata, updatedata} from "../Controllers/AuthControllers.js";

const checkAuth = (req, res, next) => {
    if (!req.session.UserId) {
      // User is not authenticated, redirect to login page
      return res.redirect('/login');
    }
    // User is authenticated, proceed to next middleware or route handler
    next();
  };

router.post("/register", Register);
router.post("/login", Login);
router.post("/Logout", Logout);
router.get("/get", get);
router.post("/post", post);
router.delete("/remove/:email", deletedata);
router.get("/get/:email", getdata);
router.patch("/update/:email", updatedata);

export default router;