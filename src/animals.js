import { db } from "./dbConnect.js";

export function addNewAnimal(req, res) {
  const newAnimal = req.body
  db.collection('animals').add(newAnimal)
    .then(doc => res.status(201).send("New Animal Added: " + doc.id))
    .catch(err => res.status(500).send(err)) 
}