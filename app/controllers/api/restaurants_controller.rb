class Api::RestaurantsController < ApplicationController


    def index
        @restaurants = Restaurant.all
        render :index
    end

    def create
        @restaurant = restaurant.new(restaurant_params)

        if @restaurant.save
            login(@restaurant)
            render 'api/restaurants/show'
        else
            render json: @restaurant.errors.full_messages, status: 400
        end
    end

    def show
        @restaurant = Restaurant.find_by_id(params[:id])
        render :show
    end


    private

    def restaurant_params
        params.require(:restaurant).permit(:name, :website, :phone_number, )
    end

end


