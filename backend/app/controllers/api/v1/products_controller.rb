class Api::V1::ProductsController < ApplicationController

    def index
        products = Product.all 
        render json: products 
    end
    
    def show
        product = Product.find(params[:id]) 
        render json: product 
    end
    
    def create
        product = Product.new(product_params)
        
        if product.valid?
          product.save
          render json: {user: ProductSerializer.new(product)}, status: :created
        else
          render json: {error: "Failed to create a product"}, status: :not_acceptable
        end
    end

    
      private
    
      def product_params
        params.permit(:id, :name, :image_url,
            :price, :color, :sku,
            :onhand_qty, :coming_in_qty,
            :sale_price)
      end
    
end
