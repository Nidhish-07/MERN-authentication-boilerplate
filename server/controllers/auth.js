import User from "../models/User.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email: email }).exec();

  if (user) {
    return res.status(400).json({
      error: "Email already exists",
    });
  }

  // User.findOne({ email: email })
  //   .then((user) => {
  //     if (user) {
  //       return res.status(400).json({
  //         error: "Email already exists",
  //       });
  //     }
  //   })
  //   .catch((err) => res.status(400).json({ error: err }));

  let newUser = new User({ name, email, password });

  const savedUser = await newUser.save();

  res.json({
    message: "Signup Success",
    user: savedUser,
  });
};
