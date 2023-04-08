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

export default function getUsers(req, res) {
  res.status(200).json(data);
}
