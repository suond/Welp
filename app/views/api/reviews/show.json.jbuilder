json.set! "review" do 
    json.extract! @review, :id, :title, :body, :rating, :user_id, :restaurant
end




