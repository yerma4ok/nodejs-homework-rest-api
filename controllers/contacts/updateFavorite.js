const { Contact } = require("../../models/contacts");

const { httpError } = require("../../helps/httpError");

async function updateFavorite(req, res, next) {
  const id = req.params.contactId;
  const { favorite } = req.body;
  if (Object.keys(req.body).length === 0) {
    return next(httpError(400, "missing missing field favorite"));
  }
  await Contact.findByIdAndUpdate(id, { favorite });
  const { name, phone, email } = await Contact.findById(id);
  res.status(200).json({ id, name, phone, email });
}

module.exports = updateFavorite;