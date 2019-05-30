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
            render json: @restaurant.errors.full_messages, status: 422
        end
    end

    def show
        @restaurant = Restaurant.with_attached_photos.find(params[:id])
        render :show
    end

    def update
        @restaurant = Restaurant.find_by(id: params[:id])
        if @restaurant.update(restaurant_params)
            render :show
        else
            render json: @restaurant.errors.full_messages, status: 422
        end
    end


    def destroy
        @restaurant = Restaurant.find(params[:id])
        @restaurant.destroy

        render :show
    end

    private

    def restaurant_params
        params.require(:restaurant).permit(:name,:owner_id, :website, :phone_number, :address, :city, :state, :zipcode, :opening_time, :closing_time, :location_id, photos: [])
    end

end


