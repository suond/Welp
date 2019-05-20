class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.integer :owner_id, null: false
      t.integer :location_id, null: false

      t.string :name, null: false
      t.string :website
      t.string :phone_number
      t.time :opening_time, null: false
      t.time :closing_time, null: false
      t.timestamps
    end
    add_index :restaurants, :owner_id
    add_index :restaurants, :location_id
  end
end
