# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create(user_name: 'alfred', password: '123456', email: 'alfred@alfred.com')
User.create(user_name: 'demoUser', password: '123456', email: 'demoUser@lootrify.com')
User.create(user_name: 'friend-1', password: '123456', email: 'friend1@lootrify.com')
User.create(user_name: 'friend-2', password: '123456', email: 'friend2@lootrify.com')
User.create(user_name: 'friend-3', password: '123456', email: 'friend3@lootrify.com')
User.create(user_name: 'friend-4', password: '123456', email: 'friend4@lootrify.com')
User.create(user_name: 'friend-5', password: '123456', email: 'friend5@lootrify.com')
