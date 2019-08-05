class RemoveLocationId < ActiveRecord::Migration[5.2]
  def change
    remove_column :restaurants, :location_id
    drop_table :locations
  end
end
