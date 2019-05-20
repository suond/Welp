class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :restaurant_id, null: false
      t.timestamps
    end
    add_index :locations, :restaurant_id
  end
end
