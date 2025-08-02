const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = require("./schemas/shemas").UserCreate;
const UserModel = mongoose.model("User", UserSchema);

// create hash for password
const createPasswordHash = async (password) => {
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};

// check hash for the passord
const checkHash = async (password, hashedPassword) => {
  const result = await bcrypt.compare(password, hashedPassword);
  return result;
};

class User {
  constructor(name, phone, email, password, role) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this._password = password;
    this.role = role;
  }

  async save() {
    this.password = await createPasswordHash(this._password);
    delete this._password;
    const user = await UserModel.findOne({
      email: this.email,
      role: this.role,
    });
    if (!user) return await UserModel.create(this);
    return null;
  }

  static async checkUsernamePassword(role, email, password) {
    const response = {
      success: false,
      user: null,
    };

    const user = await UserModel.findOne({ role, email });
    if (!user) return response;

    const match = await checkHash(password, user.password);
    if (match) {
      response.success = true;
      response.user = user;
    }
    return response;
  }
  static async getRiders() {
    const riders = await UserModel.find({ role: "rider" });
    return riders;
  }
}

module.exports = User;
