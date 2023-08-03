import User from "../models/User.js"

export const signup = (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        error: "Email already exists",
      });
    }
  });

  let newUser = new User({ name, email, password });

  newUser.save((err, success) => {
    if (err) {
      console.log("Signup error", err);
      return res.status(400).json({ error: err });
    }
  });

  return res.json({
    message: "Signup Success",
    user: newUser,
  });
};
