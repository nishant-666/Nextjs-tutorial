let data = [
  {
    name: "Nishant",
    age: 26,
  },
  {
    name: "Uday",
    age: 36,
  },
  {
    name: "Sanjeet",
    age: 46,
  },
];

export default function users(req, res) {
  if (req.method === "GET") {
    res.status(200).json(data);
  } else if (req.method === "POST") {
    let name = req.body.name;
    let age = req.body.age;

    let user = {
      name: name,
      age: age,
    };
    data.push(user);
    res.status(201).json(user);
  }
}
