let id = 0
let users = [
    {id: id++, name: "John", email: "john@gmail.com", age: 20},
    {id: id++, name: "Jane", email: "jane@gmail.com", age: 21},
    {id: id++, name: "Doe", email: "doe@gmail.com", age: 22}
]

module.exports = {users, id};