export default function handler(req, res) {
  return res.status(200).json({
    email: "test@person.net",
    name: "Test person",
    id: 1,
    get: "request",
  })
}