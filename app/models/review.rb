# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  title         :string
#  body          :string
#  rating        :integer          not null
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Review < ApplicationRecord
    validates :title, :body, :rating, presence: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
    
    belongs_to :restaurant,
    foreign_key: :restaurant_id,
    class_name: :Restaurant
end
