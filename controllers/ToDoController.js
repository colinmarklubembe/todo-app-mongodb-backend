const ToDoModel = require('../models/ToDoModel');

module.exports.getToDo = async (req, res) => {
    const toDo = await ToDoModel.find()
    res.send(toDo);
}

module.exports.saveToDo = async (req, res) => {
    const { text } = req.body;

    ToDoModel
    .create({ text })
    .then((data) => {
        console.log('Added successfully...');
        console.log(data);
        res.send(data);
    })
}

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  try {
    await ToDoModel.findByIdAndUpdate(_id, { text });
    res.json({ message: 'Updated successfully...' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update data' });
  }
};

module.exports.deleteToDo = async (req, res) => {
    const { _id, text } = req.body;
    ToDoModel
    .findByIdAndDelete(_id)
    .then(() => res.send('Deleted successfully...'))
    .catch(err => console.log(err));
}