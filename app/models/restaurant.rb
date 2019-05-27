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

class Restaurant < ApplicationRecord

    has_many_attached :photos

    belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

    has_one :location,
    foreign_key: :location_id,
    class_name: :Location

    def opening_time_str
        self.opening_time.strftime("%I:%M:%S %P")
    end

    def closing_time_str
        self.closing_time.strftime("%I:%M:%S %P")
    end
end
