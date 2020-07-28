class Api::V1::PordersController < ApplicationController

        def index
            porders = Porder.all 
            render json: porders 
        end
        
        def show
            porder = Porder.find(params[:id]) 
            render json: porder 
        end
        
        def create
            porder = Porder.new(porder_params)
            
            if porder.valid?
              porder.save
              render json: {porder: PorderSerializer.new(porder)}, status: :created
            else
              render json: {error: "Failed to create a porder"}, status: :not_acceptable
            end
        end
    
        
          private
        
          def porder_params
            params.permit(:id, :user_id, :date, :total_paid, :company_name, :description, :order_num) 
          end
    
end