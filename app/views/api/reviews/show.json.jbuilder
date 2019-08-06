json.set! "review" do 
    json.extract! @review, :id, :title, :body, :rating, :user_id, :restaurant_id, :created_at
end




