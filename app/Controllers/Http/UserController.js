'use strict'

const Redis = use('Redis')
const User = use('App/Models/User')

class UserController {

  async index () {
    const cachedUsers = await Redis.get('users')
    if (cachedUsers) {
      return JSON.parse(cachedUsers)
    }

    const users = await User.all()
    await Redis.set('users', JSON.stringify(users))
    return users
  }
}

module.exports = UserController
