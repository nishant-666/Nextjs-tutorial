let data = [];

export default function users(req, res) {
  if (req.method === "GET") {
    res.status(200).json(data);
  } else if (req.method === "POST") {
    let id = req.body.id;
    let name = req.body.name;
    let age = req.body.age;

    let user = {
      id: id,
      name: name,
      age: age,
    };
    data.push(user);
    res.status(201).json(user);
  } else if (req.method === "DELETE") {
    let { id } = req.query;

    let indexToDelete = data.findIndex((user) => user.id === id);
    data.splice(indexToDelete, 1);

    let userToDelete = data.find((user) => user.id === id);
    res.status(200).json(userToDelete);
  } else if (req.method === "PUT") {
    let { id } = req.query;
    let name = req.body.name;
    let age = req.body.age;

    let user = {
      name: name,
      age: age,
    };

    let indexToUpdate = data.findIndex((user) => user.id === id);
    data.splice(indexToUpdate, 1, user);

    let userToUpdate = data.find((user) => user.id === id);
    res.status(200).json(userToUpdate);
  }
}
