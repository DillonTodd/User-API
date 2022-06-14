import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}

export const getUser = (req, res) => {
    const { id } = req.params;

    const userInstance = users.find((user) => user.id === id);

    res.send(userInstance);
}

export const createUser = (req, res) => {
    const user = req.body;

    user.push({...user, id: uuidv4()});

    res.send('User successfully created!');
}

export const updateUser = (req, res) => {
    const { id } = req.params;

    let userInstance = users.find((user) => user.id === id);

    userInstance.firstName = req.body.firstName;
    userInstance.lastName = req.body.lastName;
    userInstance.age = req.body.age;

    res.send('User successfully updated!');
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send('User successfully deleted!');
}
