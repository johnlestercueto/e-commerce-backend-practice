const User = require("../models/model.user")

const signup = async (req, res) => {
    const {fullName, email, password} = req.body
    try {
        if (!fullName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
          }
      
          if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
          }
      
          const user = await User.findOne({ email });
      
          if (user) return res.status(400).json({ message: "Email already exists" });

          const newUser = new User({
            fullName,
            email,
            password,
          });

          await newUser.save();
          res.status(200).json({ message: "sign up successfully"})
          
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const login = async (req, res) => {
    const {email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });

        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
          }
        
          res.status(200).json({ message: "log in successfully"})
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {signup, login}