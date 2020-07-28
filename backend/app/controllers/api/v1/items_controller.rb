class Api::V1::ItemsController < ApplicationController

    def index
        @items = Item.all 
        render json: @items 
    end
    
    def show
        item = Item.find(params[:id]) 
        render json: item 
    end
    
    def create
        item = Item.new(item_params)
        
        if item.valid?
          item.save
          render json: {item: ItemSerializer.new(item)}, status: :created
        else
          render json: {error: "Failed to create a item"}, status: :not_acceptable
        end
    end

    
      private
    
      def item_params
        params.permit(:id, :user_id, :product_id, :onhand_qty, :comingin_qty, :sale_price)
      end
    
end


