# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create(user_name: 'awesomeAlfred', password: '123456', email: 'alfred@alfred.com')
User.create(user_name: 'demoUser', password: '123456', email: 'demoUser@lootrify.com')
