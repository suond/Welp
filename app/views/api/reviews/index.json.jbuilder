@reviews.each do |review|
    json.set! review.id do
        # grab rating later from 
        json.extract! review, :id, :title, :body, :rating, :user_id, :restaurant_id
        
    end
end