class ChangeTypeOfRating < ActiveRecord::Migration[5.2]
  def up
    change_column :reviews, :rating, :float
  end

  def down
    change_column :reviews, :rating, :integer
  end
end
