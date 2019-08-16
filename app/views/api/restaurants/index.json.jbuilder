@restaurants.each do |rest|
    json.set! rest.id do
        # grab rating later from 
        json.extract! rest, :id, :name, :city, :state, :numReviews
        
        json.set! "photoUrl" do
            json.array! rest.photos.map { |photo| url_for(photo)}
            
        end
    end
end