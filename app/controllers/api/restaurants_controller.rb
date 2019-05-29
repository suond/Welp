class Api::RestaurantsController < ApplicationController


    def index
        @restaurants = Restaurant.all
        render :index
    end

    def create
        @restaurant = Restaurant.new(restaurant_params)
        if @restaurant.save
            render 'api/restaurants/show'
        else
            render json: @restaurant.errors.full_messages, status: 400
        end
    end

    def show
        @restaurant = Restaurant.with_attached_photos.find(params[:id])
        render :show
    end


    private

    def restaurant_params
        params.require(:restaurant).permit(:name,:owner_id, :website, :phone_number, :address, :city, :state, :zipcode, :opening_time, :closing_time, :location_id, photos: [])
    end

end


