const entries = [
  { text: "First entry", author: "Lillian" },
  { text: "Second entry", author: "Rowland" },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.json(entries);
  }
}
