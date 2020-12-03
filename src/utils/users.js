/*
For the purpose of managing users, including tracking users in rooms, this file 
contains four functions; addUser, removeUser, getUser, getUsersInRoom
*/

const users = []

const addUser = ({ id, username, room }) => {
  // Clean the data
  username = username.trim().toLowerCase()
  room = room.trim().toLowerCase()

  // Validate the data
  if (!username || !room) {
    return {
      error: 'Must provide username and room'
    }
  }

  // Check for existing user
  const existingUser = users.find(user => {
    return user.room === room && user.username === username
  })
  if (existingUser) {
    return {
      error: 'Username is in use'
    }
  }

  // Store user
  const user = { id, username, room }
  users.push(user)

  return { user }
}

const removeUser = id => {
  const index = users.findIndex(user => {
    return user.id === id
  })

  if (index !== -1) {
    return users.splice(index, 1)[0]
  }
}

const getUser = id => {
  const foundUser = users.find(user => user.id === id)
  return foundUser
}

const getUsersInRoom = room => {
  room = room.trim().toLowerCase()
  const usersInRoom = users.filter(user => user.room === room)
  return usersInRoom
}

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
}
