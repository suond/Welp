# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(fName: "Jimmy", lName: "Kudos", zipcode: "12345", password: "123456", email: "fake@this.com" )

Restaurant.new(owner_id: 1, location_id: 1, name: "Out-n-In", opening_time:"10:00", closing_time:"17:00", address:"1234 not a real address", city: "Stockton", state:"CA", zipcode: "12345")