const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { UserInputError } = require("apollo-server");

const { SECRET_KEY } = require("../../keys/keys");
const User = require("../../models/User");
const {
  validateRegisterInput,
  validateLoginInput
} = require("../../lib/validators");

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
  Mutation: {
    login: async (_, { firstName, lastName, password }) => {
      const { errors, valid } = validateLoginInput(
        firstName,
        lastName,
        password
      );
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      const user = await User.findOne({ firstName, lastName });
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
      {
        registerInput: { firstName, lastName, password, confirmPassword, email }
      }
    ) => {
      const { valid, errors } = validateRegisterInput(
        firstName,
        lastName,
        password,
        confirmPassword,
        email
      );
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      const user = await User.findOne({ firstName, lastName });
      if (user) {
        throw new UserInputError("firstName, lastName is taken", {
          errors: {
            firstName: "This firstName is taken",
            lastName: "This firstName is taken"
          }
        });
      }

      password = await bcrypt.hash(password, 12);
      const newUser = new User({
        email,
        firstName,
        lastName,
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
