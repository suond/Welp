# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'


dummyUser = User.create!(fName: "Jimmy", lName: "Kudos", zipcode: "12345", password: "123456", email: "fake@this.com" )
dummyAvatar = open('https://s3-us-west-1.amazonaws.com/aa-welp-dev/jk.png')
dummyUser.avatar.attach(io: dummyAvatar, filename: 'avatar.jpg')

secondUser = User.create!(fName: "Cloud", lName: "Strife", zipcode: "99920", password: "123456", email: "bustersword@this.com" )


restBurger = Restaurant.create!(owner_id: 1, location_id: 1, name: "Out-n-In", opening_time:"10:00", closing_time:"17:00", address:"1234 not a real address", city: "Stockton", state:"CA", zipcode: "12345", phone_number: "123-456-7890", website: "https://www.google.com")
burgerPhoto1 = open('https://s3-us-west-1.amazonaws.com/aa-welp-dev/burger.jpg')
restBurger.photos.attach(io: burgerPhoto1, filename: 'burger1.jpg')
burgerPhoto2 = open('https://s3-us-west-1.amazonaws.com/aa-welp-dev/burger2.jpg')
restBurger.photos.attach(io: burgerPhoto2, filename: 'burger2.jpg')
chickensand = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/chickensand.jpeg')
restBurger.photos.attach(io: chickensand, filename: 'chickensand.jpg')
fries = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/fries.jpg')
restBurger.photos.attach(io: fries, filename: 'fries.jpg')

restPho = Restaurant.create!(owner_id: 1, location_id: 1, name: "Pho-King", opening_time:"11:00 am", closing_time:"8:00 pm", address:"1234 not a real address", city: "Sacramento", state:"CA", zipcode: "12345", phone_number: "987-654-3210", website: "https://phoking.com" )
pho1 = open('https://s3-us-west-1.amazonaws.com/aa-welp-dev/pho.jpg')
restPho.photos.attach(io: pho1, filename: "pho1.jpg")
pho2 = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/pho2.jpg')
restPho.photos.attach(io: pho2, filename: "pho2.jpg")
condi = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/condiments.jpg')
restPho.photos.attach(io: condi, filename: "condiments.jpg")

# create a total of 6 restaurants, one for ice cream, one for tacos, one for chinese, and one for smoothies
restIce = Resaurant.create!(owner_id: 2, location_id: 2, name: "Eye Scream", opening_time: "9:00 am", closing_time: "7:30 pm", address: "1234 not a real address", city: "Redwood", state: "CA", zipcode: "23456", phone_number: "209-093-5656", website: "https://eyescream.com")


#location
Location.create!(lat: 0.0, lng: 0.0, restaurant_id: 1)
Location.create!(lat: -100.0, lng: 50.0, restaurant_id: 2)