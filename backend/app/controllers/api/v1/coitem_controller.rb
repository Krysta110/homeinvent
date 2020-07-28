class Api::V1::CoitemController < ApplicationController
    def index
        @coitems = Coitem.all 
        render json: @coitems 
    end
    
    def show
        coitem = Coitem.find(params[:id]) 
        render json: coitem 
    end
    
    def create
        coitem = Coitem.new(coitem_params)
        
        if coitem.valid?
          coitem.save
          render json: {coitem: CoitemSerializer.new(coitem)}, status: :created
        else
          render json: {error: "Failed to create a coitem"}, status: :not_acceptable
        end
    end

    
      private
    
      def coitem_params
        params.permit(:id, :item_id, :corder_id, :qty)
      end
end
