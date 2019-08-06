class Api::ReviewsController < ApplicationController


    def index
        @reviews = Review.all
        render :index
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render "api/restaurants/#{@review.restaurant_id}"
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def show
        @review = Review.includes(:restaurant).find(params[:id])
        render :show
    end

    def update
        @review = Review.find_by(id: params[:id])
        if @review.update(review_params)
            render "api/restaurants/#{@review.restaurant_id}"
        else
            render json: @review.errors.full_messages, status: 422
        end
    end


    def destroy
        @review = Review.find(params[:id])
        @review.destroy

        render :show
    end

    private

    def review_params
        params.require(:review).permit(:title,:body, :rating, :user_id, :restaurant_id)
    end

end


