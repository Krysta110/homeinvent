class Api::V1::CustomersController < ApplicationController

    def index
        @customers = Customer.all 
        render json: @customers 
    end
    
    def show
        customer = Customer.find(params[:id]) 
        render json: customer 
    end
    
    def create
        customer = Customer.create!(customer_params)
        
        if customer.valid?
          render json: {customer: CustomerSerializer.new(customer)}, status: :created
        else
          render json: {error: "Failed to create a product"}, status: :not_acceptable
        end
    end

    
      private
    
      def customer_params
        params.permit(:id, :name, :phone, :email, :user_id)
      end
    
end