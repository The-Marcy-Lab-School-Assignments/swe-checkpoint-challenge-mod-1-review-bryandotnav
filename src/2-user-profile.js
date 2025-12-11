// Return a new user object with username, email, isActive: true, loginCount: 0
const createUser = (username, email) => {
  const User = {
    "username": username,
    "email": email,
    "isActive": true,
    "loginCount": 0,
  }
  return User;
};

// Increase the user's loginCount by 1
const incrementLogin = (user) => {
  return user["loginCount"]++
};

// Set isActive to false and delete the email property. Return the user.
const deactivateUser = (user) => {
  user["isActive"] = false;
  delete user["email"];
  return user;
};

// Print each property and value in the format "key: value"
const printUserInfo = (user) => {
  for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
  }
};

// BONUS: Return a true copy of the user object (not a reference)
const cloneUser = (user) => {
  return { ...user }
};

module.exports = {
  createUser,
  printUserInfo,
  incrementLogin,
  deactivateUser,
  cloneUser,
};
