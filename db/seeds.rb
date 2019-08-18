# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum metus eros, sit amet mollis sapien dictum vel. Nullam imperdiet efficitur eros, semper vulputate massa ornare quis. Maecenas libero enim."

dummyUser = User.create!(fName: "Jimmy", lName: "Kudos", zipcode: "12345", password: "123456", email: "fake@this.com" )
dummyAvatar = open('https://s3-us-west-1.amazonaws.com/aa-welp-dev/jk.png')
dummyUser.avatar.attach(io: dummyAvatar, filename: 'avatar.jpg')

secondUser = User.create!(fName: "Cloud", lName: "Strife", zipcode: "99920", password: "123456", email: "bustersword@this.com" )
thirdUser = User.create!(fName: "Mario", lName: "Mario", zipcode: "95210", password: "123456", email: "mushroom@this.com" )
fourthUser = User.create!(fName: "Locke", lName: "Picker", zipcode: "23231", password: "123456", email: "redkey@this.com" )
fourthUser = User.create!(fName: "Solid", lName: "Snake", zipcode: "87332", password: "123456", email: "socom@this.com" )

#write a single review for each restaurant


restBurger = Restaurant.create!(owner_id: 1, name: "Out-n-In", opening_time:"10:00", closing_time:"17:00", address:"1234 not a real address", city: "Stockton", state:"CA", zipcode: "12345", phone_number: "123-456-7890", website: "https://www.google.com")
burgerPhoto1 = open('https://s3-us-west-1.amazonaws.com/aa-welp-dev/burger.jpg')
restBurger.photos.attach(io: burgerPhoto1, filename: 'burger1.jpg')
burgerPhoto2 = open('https://s3-us-west-1.amazonaws.com/aa-welp-dev/burger2.jpg')
restBurger.photos.attach(io: burgerPhoto2, filename: 'burger2.jpg')
chickensand = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/chickensand.jpeg')
restBurger.photos.attach(io: chickensand, filename: 'chickensand.jpg')
fries = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/fries.jpg')
restBurger.photos.attach(io: fries, filename: 'fries.jpg')

Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 1)
Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 1)
Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 1)
Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 1)
Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 1)

restPho = Restaurant.create!(owner_id: 1, name: "Pho-King", opening_time:"11:00 am", closing_time:"8:00 pm", address:"1234 not a real address", city: "Sacramento", state:"CA", zipcode: "12345", phone_number: "987-654-3210", website: "https://phoking.com" )
pho1 = open('https://s3-us-west-1.amazonaws.com/aa-welp-dev/pho.jpg')
restPho.photos.attach(io: pho1, filename: "pho1.jpg")
pho2 = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/pho2.jpg')
restPho.photos.attach(io: pho2, filename: "pho2.jpg")
condi = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/condiments.jpg')
restPho.photos.attach(io: condi, filename: "condiments.jpg")

Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 2)
Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 2)

restIce1 = Restaurant.create!(owner_id: 2, name: "Eye Scream", opening_time: "9:00 am", closing_time: "7:30 pm", address: "1234 not a real address", city: "Redwood", state: "CA", zipcode: "23456", phone_number: "209-093-5656", website: "https://eyescream.com")
#photo 1 and photo 2 ice
vanilla_ice = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/ice_cream_1.png')
restIce1.photos.attach(io: vanilla_ice, filename: "vanilla_ice.jpg")
strawberry_ice = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/ice_cream_2.png')
restIce1.photos.attach(io: strawberry_ice, filename: "strawberry_ice.jpg")

review1 = Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 3)
review2 = Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 3)

restTaco1 = Restaurant.create!(owner_id: 1, name: "4 Taco", opening_time: "9:00 am", closing_time: "7:30 pm", address: "4321 not a real address", city: "Pleasanton", state: "CA", zipcode: "34567", phone_number: "209-093-3324", website: "https://taco.com")
#photo 1 and photo 2 taco
taco_2 = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/taco_2.png')
restTaco1.photos.attach(io: taco_2, filename: "taco_2.jpg")
taco_1 = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/taco_1.png')
restTaco1.photos.attach(io: taco_1, filename: "taco_1.jpg")

Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 4)
Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 4)

restIndian = Restaurant.create!(owner_id: 2, name: "Curray", opening_time: "9:00 am", closing_time: "9:00 pm", address: "4321 Curry Street", city: "Los Angeles", state: "CA", zipcode: "45678", phone_number: "818-123-3324", website: "https://curray.com")
#photo1
curry1 = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/curry_1.png')
restIndian.photos.attach(io: curry1, filename: "curry1.jpg")


restNacho = Restaurant.create!(owner_id: 1, name: "Chip N Cheese", opening_time: "10:00 am", closing_time: "9:00 pm", address: "1111 Nacho Street", city: "Stockton", state: "CA", zipcode: "23123", phone_number: "209-123-1122", website: "https://nanaco.com")
#photo1 nacho
nacho1 = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/nacho_1.png')
restNacho.photos.attach(io: nacho1, filename: "nacho1.jpg")

Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 6)
Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 6)
Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 6)

restSteak = Restaurant.create!(owner_id: 2, name: "FSteak", opening_time: "10:00 am", closing_time: "9:00 pm", address: "In Inaba", city: "Inaba", state: "JP", zipcode: "23123", phone_number: "000-123-1122", website: "https://FSteak.com")
#photo1 steak and photo2 steak
steak_1 = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/steak_1.png')
restSteak.photos.attach(io: steak_1, filename: "steak_1.jpg")
steak_2 = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/steak_2.png')
restSteak.photos.attach(io: steak_2, filename: "steak_2.jpg")

Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 7)

restSmoothie = Restaurant.create!(owner_id: 2, name: "Blended", opening_time: "9:00 am", closing_time: "8:00 pm", address: "Bam a Lam", city: "Dover", state: "DE", zipcode: "43324", phone_number: "000-123-1121", website: "https://willitblend.com")
#photo1 smooth and photo2 smooth
smoothie_2 = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/smoothie_2.png')
restSmoothie.photos.attach(io: smoothie_2, filename: "smoothie_2.jpg")
smoothie_1 = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/smoothie_1.png')
restSmoothie.photos.attach(io: smoothie_1, filename: "smoothie_1.jpg")

Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 8)
Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 8)

restCookie = Restaurant.create!(owner_id: 2, name: "Circle Ahoy", opening_time: "9:00 am", closing_time: "8:00 pm", address: "1515 Degree Ave", city: "Dover", state: "DE", zipcode: "43324", phone_number: "000-123-1021", website: "https://circlesnack.com")
cookie_1 = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/cookie_1.png')
restCookie.photos.attach(io: cookie_1, filename: "cookie_1.jpg")
cookie_2 = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/cookie_2.png')
restCookie.photos.attach(io: cookie_2, filename: "cookie_2.jpg")

Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 9)
Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 9)
Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 9)
Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 9)

restBurger2 = Restaurant.create!(owner_id: 2, name: "Pattie Crab", opening_time: "9:00 am", closing_time: "8:00 pm", address: "1515 Degree Ave", city: "San Fransico", state: "CA", zipcode: "43221", phone_number: "023-123-1021", website: "https://patty.com")
burger2 = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/burger2.jpg')
restBurger2.photos.attach(io: burger2, filename: "burger2.jpg")

##start uploading here##
restBurrito = Restaurant.create!(owner_id: 2, name: "Zel Grillito", opening_time: "9:00 am", closing_time: "8:00 pm", address: "1234 Another Address", city: "New Lolzy", state: "CA", zipcode: "43221", phone_number: "023-123-1021", website: "https://zelritto.com")
burrito1 = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/burrito1.png')
restBurrito.photos.attach(io: burrito1, filename: "burrito1.jpg")

Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 11)

restShake = Restaurant.create!(owner_id: 2, name: "Shake Me", opening_time: "9:00 am", closing_time: "8:00 pm", address: "1234 Another Address", city: "New Lolzy", state: "CA", zipcode: "43221", phone_number: "023-123-1021", website: "https://ShakeMe.com")
shake_1 = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/shake_1.png')
restShake.photos.attach(io: shake_1, filename: "shake_1.jpg")

Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 12)
Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 12)

restPizza = Restaurant.create!(owner_id: 2, name: "Pizza Tho", opening_time: "9:00 am", closing_time: "8:00 pm", address: "1234 Another Address", city: "New Lolzy", state: "CA", zipcode: "43221", phone_number: "023-123-1021", website: "https://pizzatho.com")
pizza_1 = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/pizza_1.png')
restPizza.photos.attach(io: pizza_1, filename: "pizza_1.jpg")

Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 13)
Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 13)

restPizza2 = Restaurant.create!(owner_id: 1, name: "C^2", opening_time: "9:00 am", closing_time: "8:00 pm", address: "1234 Another Address", city: "Denver", state: "CO", zipcode: "43221", phone_number: "023-123-1021", website: "https://cc2.com")
pizza_2 = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/pizza_2.png')
restPizza2.photos.attach(io: pizza_2, filename: "pizza_2.jpg")

restPasta = Restaurant.create!(owner_id: 1, name: "Ma Spagehetti", opening_time: "9:00 am", closing_time: "8:00 pm", address: "1234 Another Address", city: "Denver", state: "CO", zipcode: "43221", phone_number: "023-123-1021", website: "https://cc2.com")
pasta_1 = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/pasta_1.png')
restPasta.photos.attach(io: pasta_1, filename: "pasta_1.jpg")

Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 15)

restRib = Restaurant.create!(owner_id: 1, name: "RibRibRib", opening_time: "9:00 am", closing_time: "8:00 pm", address: "1234 Another Address", city: "Dallas", state: "TX", zipcode: "43221", phone_number: "023-123-1021", website: "https://ribx3.com")
rib_1 = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/rib_1.png')
restRib.photos.attach(io: rib_1, filename: "rib_1.jpg")

Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 16)
Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 16)

restFriedChicken = Restaurant.create!(owner_id: 1, name: "Battered Chicken", opening_time: "9:00 am", closing_time: "8:00 pm", address: "1234 Another Address", city: "Dallas", state: "TX", zipcode: "43221", phone_number: "023-123-1021", website: "https://batteredchicken.com")
friedC = open('https://aa-welp-dev.s3-us-west-1.amazonaws.com/friedC_1.png')
restFriedChicken.photos.attach(io: friedC, filename: "friedC.jpg")

Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 17)
Review.create!(body: lorem, rating: rand(1..5), user_id: rand(1..5), restaurant_id: 17)

