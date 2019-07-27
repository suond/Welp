json.items do
  json.array!(@items) do |item|
      json.id item.id
      json.name item.name
      json.address item.address
      json.phone_number item.phone_number
      json.set! "photoUrl" do
          json.array! item.photos.map { |photo| url_for(photo)}
            
      end
  end
end