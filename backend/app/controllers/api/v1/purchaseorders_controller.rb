class Api::V1::PurchaseordersController < ApplicationController

    def index
        purchaseorders = PurchaseOrder.all 
        render json: purchaseorders 
    end
    
    def show
        purchaseorder = PurchaseOrder.find(params[:id]) 
        render json: purchaseorder
    end
    
    def create
        purchaseorder = PurchaseOrder.new(purchaseorder_params)
        
        if purchaseorder.valid?
          purchaseorder.save
          render json: {purchaseorder: PurchaseorderSerializer.new(purchaseorder)}, status: :created
        else
          render json: {error: "Failed to create a Purchase Order"}, status: :not_acceptable
        end
    end

    
      private
    
      def purchaseorder_params
        params.permit(:id, :date,
            :total_paid, :company_name,
            :description, :order_num, :product_id)
          
      end
    
end
