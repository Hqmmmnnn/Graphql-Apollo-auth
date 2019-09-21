const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { UserInputError } = require("apollo-server");

const { SECRET_KEY } = require("../../keys/keys");
const User = require("../../models/User");
const {
  validateRegisterInput,
  validateLoginInput
} = require("../../lib/validators");
const checkAuth = require("../../lib/checkAuth");

const generateToken = user => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    },
    SECRET_KEY,
    { expiresIn: "1h" }
  );
};

module.exports = {
  Query: {
    currentUser: async (_, __, context) => {
      const user = checkAuth(context);

      if (user) {
        return user;
      } else {
        throw new Error("user not found");
      }
    }
  },
  Mutation: {
    login: async (_, { email, password }) => {
      const { errors, valid } = validateLoginInput(email, password);

      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      const user = await User.findOne({ email });
      if (!user) {
        errors.general = "User not found";
        throw new UserInputError("User not found", { errors });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        errors.general = "Wrong crendetials";
        throw new UserInputError("Wrong crendetials", { errors });
      }

      const token = generateToken(user);

      return {
        ...user._doc,
        id: user._id,
        token
      };
    },

    register: async (
      _,
      { registerInput: { email, password, confirmPassword } }
    ) => {
      const { valid, errors } = validateRegisterInput(
        email,
        password,
        confirmPassword
      );
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      const user = await User.findOne({ email });
      if (user) {
        throw new UserInputError("email is taken", {
          errors: {
            email: "This email is taken"
          }
        });
      }

      password = await bcrypt.hash(password, 12);
      const newUser = new User({
        email,
        password,
        createdAt: new Date().toISOString()
      });

      const res = await newUser.save();
      const token = generateToken(res);

      return {
        ...res._doc,
        id: res._id,
        token
      };
    }
  }
};
