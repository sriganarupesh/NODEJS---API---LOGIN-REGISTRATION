const Topper = require('../models/usermodel.js');
// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
Topper.find()
  .then(users => {
  res.send(users);
}).catch(err => {
  res.status(500).send({
  message: err.message || "Something went wrong while getting list of users."
});
});
};
// Create and Save a new Topper
exports.create = (req, res) => {
// Validate request
if(!req.body) {
  return res.status(400).send({
  message: "Please fill all required field"
});
}
// Create a new Topper
const topper = new Topper({
  Tid: req.body.Tid,
  Tname: req.body.Tname,
  Tage: req.body.Tage,
  Taddress: req.body.Taddress,
  Tphone: req.body.Tphone,
  Tdob: req.body.Tdob,
  Temail: req.body.Temail
});
// Save user in the database
topper.save()
  .then(data => {
  res.send(data);
}).catch(err => {
  res.status(500).send({
  message: err.message || "Something went wrong while creating new topper."
});
});
};
// Find a single Topper with a id
exports.findOne = (req, res) => {
 Topper.findById(req.params.id)
  .then(topper => {
  if(!topper) {
   return res.status(404).send({
   message: "Topper not found with id " + req.params.id
 });
}
 res.send(topper);
}).catch(err => {
  if(err.kind === 'ObjectId') {
    return res.status(404).send({
    message: "Topper not found with id " + req.params.id
  });
}
return res.status(500).send({
  message: "Error getting topper with id " + req.params.id
});
});
};
// Update a Topper identified by the id in the request
exports.update = (req, res) => {
// Validate Request
if(!req.body) {
  return res.status(400).send({
  message: "Please fill all required field"
});
}
// Find user and update it with the request body
Topper.findByIdAndUpdate(req.params.id, {
  Tid: req.body.Tid,
  Tname: req.body.Tname,
  Tage: req.body.Tage,
  Taddress: req.body.Taddress,
  Tphone: req.body.Tphone,
  Tdob: req.body.Tdob,
  Temail: req.body.Temail
}, {new: true})
.then(topper => {
 if(!topper) {
   return res.status(404).send({
   message: "topper not found with id " + req.params.id
 });
}
res.send(topper);
}).catch(err => {
if(err.kind === 'ObjectId') {
  return res.status(404).send({
  message: "topper not found with id " + req.params.id
});
}
return res.status(500).send({
  message: "Error updating topper with id " + req.params.id
});
});
};
// Delete a Topper with the specified id in the request
exports.delete = (req, res) => {
Topper.findByIdAndRemove(req.params.id)
.then(topper => {
if(!topper) {
  return res.status(404).send({
  message: "topper not found with id " + req.params.id
});
}
res.send({message: "topper deleted successfully!"});
}).catch(err => {
if(err.kind === 'ObjectId' || err.name === 'NotFound') {
  return res.status(404).send({
  message: "topper not found with id " + req.params.id
});
}
return res.status(500).send({
  message: "Could not delete user with id " + req.params.id
});
});
};