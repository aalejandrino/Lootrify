# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create(user_name: 'Alfred Alejandrino', password: '123456', email: 'alfred@alfred.com')

## Demo Users.. starring Game of Thrones characters
User.create(user_name: 'Jamie Lannister', password: 'demoUser', email: 'demoUser1@lootrify.com')
User.create(user_name: 'Tyrion Lannister', password: 'demoUser', email: 'demoUser2@lootrify.com')
User.create(user_name: 'Jon Snow', password: 'demoUser', email: 'demoUser3@lootrify.com')
User.create(user_name: 'Arya Stark', password: 'demoUser', email: 'demoUser4@lootrify.com')
User.create(user_name: 'Oberyn Martell', password: 'demoUser', email: 'demoUser5@lootrify.com')
User.create(user_name: 'Khal Drogo', password: 'demoUser', email: 'demoUser6@lootrify.com')
User.create(user_name: 'Sansa Stark', password: 'demoUser', email: 'demoUser7@lootrify.com')
User.create(user_name: 'Margaery Tyrell', password: 'demoUser', email: 'demoUser8@lootrify.com')
User.create(user_name: 'Bran Stark', password: 'demoUser', email: 'demoUser9@lootrify.com')
User.create(user_name: 'Ramsay Bolton', password: 'demoUser', email: 'demoUser10@lootrify.com')
User.create(user_name: 'Jorah Mormont', password: 'demoUser', email: 'demoUser11@lootrify.com')
User.create(user_name: 'Samwell Tarly', password: 'demoUser', email: 'demoUser12@lootrify.com')
User.create(user_name: 'Tommen Baratheon', password: 'demoUser', email: 'demoUser13@lootrify.com')
User.create(user_name: 'Davos Seaworth', password: 'demoUser', email: 'demoUser14@lootrify.com')

## Friend Users.. starring people from a/A
User.create(user_name: 'Andy Wynkoop', password: '123456', email: 'friend1@lootrify.com')
User.create(user_name: 'AJ Ansel', password: '123456', email: 'friend2@lootrify.com')
User.create(user_name: 'Nate Cunha', password: '123456', email: 'friend3@lootrify.com')
User.create(user_name: 'Carey Johnson', password: '123456', email: 'friend4@lootrify.com')
User.create(user_name: 'Farah Quader', password: '123456', email: 'friend5@lootrify.com')
User.create(user_name: 'Nick Halloran', password: '123456', email: 'friend6@lootrify.com')
User.create(user_name: 'Robin Sunny', password: '123456', email: 'friend7@lootrify.com')
User.create(user_name: 'Shasha Racherla', password: '123456', email: 'friend8@lootrify.com')
User.create(user_name: 'Sheldon Chan', password: '123456', email: 'friend9@lootrify.com')
User.create(user_name: 'Henry Nguyen', password: '123456', email: 'friend10@lootrify.com')
User.create(user_name: 'Travis Nguyen', password: '123456', email: 'friend11@lootrify.com')
User.create(user_name: 'Valerie Sui', password: '123456', email: 'friend12@lootrify.com')
User.create(user_name: 'Aaron Wayne', password: '123456', email: 'friend13@lootrify.com')
User.create(user_name: 'Andres Alfaro', password: '123456', email: 'friend14@lootrify.com')
User.create(user_name: 'Cynthia Ma', password: '123456', email: 'friend15@lootrify.com')
User.create(user_name: 'Jesse Wong', password: '123456', email: 'friend16@lootrify.com')
User.create(user_name: 'Liz Houle', password: '123456', email: 'friend17@lootrify.com')
User.create(user_name: 'Stephen Pangburn II', password: '123456', email: 'friend18@lootrify.com')

## Others
User.create(user_name: 'Franko Sosa', password: '123456', email: 'friend19@lootrify.com')
User.create(user_name: 'Andrea Pescetelli', password: '123456', email: 'friend20@lootrify.com')


# Bill.destroy_all
# Bill.create(title: "Breakfast the Cat's Birthday Bonanza", creator_id: 1, total_bill: 1000, date: "2018-10-10")
# Bill.create(title: "App Academy, Lake Tahoe Trip", creator_id: 2, total_bill: 1500, date: "2018-12-20")
# Bill.create(title: "Summer Fun, Under the Sea", creator_id: 1, total_bill: 800, date: "2018-06-10")
# Bill.create(title: "Picnic at the SF Park", creator_id: 2, total_bill: 500, date: "2018-07-01")
# Bill.create(title: "Robin wants to donate me money", creator_id: 1, total_bill: 1000000, date: "2018-04-16")
# Bill.create(title: "Party at a-A", creator_id: 2, total_bill: 300, date: "2018-07-16")
# Bill.create(title: "Late night in SF after projects", creator_id: 2, total_bill: 500, date: "2018-07-17")
#
# Billmembership.destroy_all
# Billmembership.create(member_id: 1, bill_id: 1)
# Billmembership.create(member_id: 3, bill_id: 1)
# Billmembership.create(member_id: 2, bill_id: 2)
# Billmembership.create(member_id: 4, bill_id: 2)
# Billmembership.create(member_id: 1, bill_id: 3)
# Billmembership.create(member_id: 11, bill_id: 3)
# Billmembership.create(member_id: 2, bill_id: 4)
# Billmembership.create(member_id: 7, bill_id: 4)
# Billmembership.create(member_id: 1, bill_id: 5)
# Billmembership.create(member_id: 15, bill_id: 5)
# Billmembership.create(member_id: 2, bill_id: 6)
# Billmembership.create(member_id: 1, bill_id: 6)
# Billmembership.create(member_id: 2, bill_id: 7)
# Billmembership.create(member_id: 1, bill_id: 7)
