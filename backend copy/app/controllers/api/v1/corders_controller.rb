class Api::V1::CordersController < ApplicationController
    
    def index
        @corders = Corder.all 
        render json: @corders 
    end
    
    def show
        corder = Corder.find(params[:id]) 
        render json: corder 
    end
    
    def create
        corder = Corder.create!(corder_params)
        
        if corder.valid?
          # corder.save
          render json: {corder: CorderSerializer.new(corder)}, status: :created
        else
          render json: {error: "Failed to create a corder"}, status: :not_acceptable
        end
    end

    
      private
    
      def corder_params
        params.permit(:id, :customer_id, :total_paid, :paid_with, :product_id)
      end

    
end
