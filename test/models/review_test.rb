# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  body          :string
#  rating        :float            not null
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
