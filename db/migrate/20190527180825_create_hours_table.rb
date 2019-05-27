class CreateHoursTable < ActiveRecord::Migration[5.2]
  def change
    create_table :hours do |t|
      t.string :day, null: false
      t.integer :restaurant_id, null: false
      t.date :opening_time, null: false
      t.date :closing_time, null: false
    end
    add_index :hours, :restaurant_id
  end
end
