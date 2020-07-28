class Api::V1::PoproductController < ApplicationController

    def index
        @poproducts = Poproduct.all 
        render json: @poproducts 
    end
    
    def show
        poproduct = Poproduct.find(params[:id]) 
        render json: poproduct 
    end
    
    def create
        poproduct = Poproduct.new(poproduct_params)
        
        if poproduct.valid?
          poproduct.save
          render json: {poproduct: PoproductSerializer.new(poproduct)}, status: :created
        else
          render json: {error: "Failed to create a poproduct"}, status: :not_acceptable
        end
    end

    
      private
    
      def poproduct_params
        params.permit(:id, :product_id, :porder_id, :qty)
      end
end

