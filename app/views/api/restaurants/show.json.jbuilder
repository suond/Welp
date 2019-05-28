json.extract! @restaurant, :id,:name, :website, :phone_number, :owner_id, :opening_time_str, :closing_time_str, :address, :city, :state, :zipcode
json.set! "photoUrl" do
    json.array! @restaurant.photos.map { |photo| url_for(photo)}
    
end