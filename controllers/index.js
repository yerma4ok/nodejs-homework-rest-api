const { addContact } = require("./contacts");
const { listContacts } = require("./contacts");
const { getContactById } = require("./contacts");
const { removeContact } = require("./contacts");
const { updateContact } = require("./contacts");
const { updatefavorite } = require("./contacts");

const { signup } = require("./auth");
const { login } = require("./auth");
const { logout } = require("./auth");
const { current } = require("./auth");

module.exports = {
  addContact,
  listContacts,
  getContactById,
  removeContact,
  updateContact,
  updatefavorite,
  signup,
  login,
  logout,
  current,
};