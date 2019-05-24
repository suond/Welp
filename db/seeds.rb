# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.create!(fName: "Jimmy", lName: "Kudos", zipcode: "12345", password: "123456", email: "fake@this.com" )

Restaurant.create!(owner_id: 1, location_id: 1, name: "Out-n-In", opening_time:"10:00", closing_time:"17:00", address:"1234 not a real address", city: "Stockton", state:"CA", zipcode: "12345")
Restaurant.create!(owner_id: 1, location_id: 1, name: "Pho-King", opening_time:"11:00 am", closing_time:"8:00 pm", address:"1234 not a real address", city: "Sacramento", state:"CA", zipcode: "12345")

Location.create!(lat: 0.0, lng: 0.0, restaurant_id: 1)