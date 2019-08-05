class AddLngLatToRestaurant < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :lng, :float, null:true
    add_column :restaurants, :lat, :float, null:true
    
  end
end
