# == Schema Information
#
# Table name: restaurants
#
#  id           :bigint           not null, primary key
#  owner_id     :integer          not null
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
#  lng          :float
#  lat          :float
#

class Restaurant < ApplicationRecord

    validates  :opening_time, :closing_time, :address, :city, :state, :zipcode, presence: true
    validates :name, presence: true, length: {minimum: 1}

    has_many_attached :photos

    belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

    has_many :reviews

    def opening_time_str
        self.opening_time.strftime("%I:%M %P")
    end

    def closing_time_str
        self.closing_time.strftime("%I:%M %P")
    end

    def averageReviewScore
        sum = 0;
        reviews = self.reviews
        reviews.each do |review|
            sum = sum + review.rating
        end

        avg = sum*1.0 / (reviews.length)
        sprintf("%.2f", avg)
    end
    def numReviews 

        self.reviews.length
    end
end
