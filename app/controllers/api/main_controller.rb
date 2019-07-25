class Api::MainController < ApplicationController


    before_action :force_json, only: :search
  
    
  
    def search
      if params[:q].length > 0
        @items = Restaurant.ransack(name_cont: params[:q]).result(distinct: true)
      end
    end
  
    private
  
    def force_json
      request.format = :json
    end
  end