# == Schema Information
#
# Table name: restaurants
#
#  id           :bigint           not null, primary key
#  owner_id     :integer          not null
#  location_id  :integer          not null
#  name         :string           not null
#  website      :string
#  phone_number :string
#  opening_time :time             not null
#  closing_time :time             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Restaurant < ApplicationRecord

    has_many_attached :photo

    belongs_to :owner,
    foreign_key: :owner_id,
    className: :User
end
