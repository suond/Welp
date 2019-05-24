class AddColumnsToRestaurant < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :address, :string, null:false
    add_column :restaurants, :city, :string, null:false
    add_column :restaurants, :state, :string, null:false
    add_column :restaurants, :zipcode, :string, null:false
  end
end
