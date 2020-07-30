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
     
        # user_id = JWT.decode(token, "se042020")[0]["user_id"]
        # user = User.find(params[:id]) 

        # byebug
        customer = Customer.create!(customer_params)
        
        if customer.valid?
          render json: {customer: CustomerSerializer.new(customer)}, status: :created
        else
          render json: {error: "Failed to create a customer"}, status: :not_acceptable
        end
    end

    def edit
      customer = Customer.find(params[:id])
    end
    
      def update
        customer = Customer.find(params[:id])
        customer.update(customer_params)
        render json: customer
    end
    
      private
    
      def customer_params
        params.permit(:id, :name, :phone, :email, :user_id)
      end
    
end