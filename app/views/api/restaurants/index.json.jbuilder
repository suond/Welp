@restaurants.each do |rest|
    json.set! rest.id do
        json.extract! rest, :id, :name
    end
end