json.extract! @restaurant, :id,:name, :website, :phone_number, :owner_id, :opening_time_str, :closing_time_str, :address, :city, :state, :zipcode
json.set! "reviews" do
    @restaurant.reviews.each do |review|
        json.set! review.id do
            json.extract! review, :title, :body, :rating, :user_id, :restaurant_id
        end
    end
end
json.set! "photoUrl" do
    json.array! @restaurant.photos.map { |photo| url_for(photo)}
    
end