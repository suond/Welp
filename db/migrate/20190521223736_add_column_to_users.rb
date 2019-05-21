class AddColumnToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :fName, :string, null: false
    add_column :users, :lName, :string, null: false
    add_column :users, :zipcode, :string, null: false
  end

  def self.down  
    drop_table :users  
  end 
end
