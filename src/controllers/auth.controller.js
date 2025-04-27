import User from "../models/user.model.js";

export const register = async (req, res) => {
  const { email, username, password } = req.body;
  console.log(email, password, username);

  try {
    const newUser = new User({ username, email, password });

    console.log(newUser);

    const userSaved = await newUser.save();

    res.json(userSaved);
  } catch (error) {
    console.log(error);
  }
};

export const login = (req, res) => {
  res.send("login");
};
