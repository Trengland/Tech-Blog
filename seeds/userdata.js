// using the bcrypt library to hash the user's password before storing it in the database. 
// The hashSync method takes two arguments: the password to be hashed, and the number of salt rounds to use (in this case, 10). 
// The resulting hash is then stored in the password property of the user object.

const bcrypt = require('bcrypt');

const userData = [
  {
    username: 'johndoe',
    email: 'johndoe@example.com',
    password: bcrypt.hashSync('password123', 10)
  },
  {
    username: 'janedoe',
    email: 'janedoe@example.com',
    password: bcrypt.hashSync('password456', 10)
  }
];

module.exports = userData;
