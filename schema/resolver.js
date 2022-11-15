const { UserList } = require("../FackData");
const _ = require("lodash");
const Userlist = require("../model/model");

const resolvers = {
  Query: {
    async user(_, { id }) {
      return await Userlist.findById(id);
    },
    async users() {
      return await Userlist.find();
    },
  },
  Mutation: {
    async createUser(parent, args) {
      const { name, username, age, nationality } = args.input;
      const createUser = await new Userlist({
        name,
        username,
        age: Number(age),
        nationality,
      }).save();
      return {
        id: createUser.id,
        ...createUser._doc,
      };
    },
    async updateUser(parent, args) {
      const { id, username, name, age, nationality } = args.input;
      // username ? Username = username : null
      // name ? Name = name : null
      // age ? Age = age : null
      // nationality ? Nationality = nationality : null
      // userUpdate = user
      const Edit = await Userlist.findByIdAndUpdate(
        { _id: id },
        {
          name: name,
          username: username,
          age: age,
          nationality: nationality,
        },
        { new: true }
      );
      return Edit;
    },
    async deleteUser(parent, { id }) {
      const Wasdeleted = await Userlist.findByIdAndDelete({ _id: id });
      return Wasdeleted;
    },
  },
};

module.exports = { resolvers };
