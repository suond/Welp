@restaurants.each do |rest|
    json.set! rest.id do
        # grab rating later from 
        json.extract! rest, :id, :name, :city, :state
    end
end