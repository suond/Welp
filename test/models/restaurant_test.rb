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
#  address      :string           not null
#  city         :string           not null
#  state        :string           not null
#  zipcode      :string           not null
#

require 'test_helper'

class RestaurantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
