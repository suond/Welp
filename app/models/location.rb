# == Schema Information
#
# Table name: locations
#
#  id            :bigint           not null, primary key
#  lat           :float            not null
#  lng           :float            not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Location < ApplicationRecord
end
