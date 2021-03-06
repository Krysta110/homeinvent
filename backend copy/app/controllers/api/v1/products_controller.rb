

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
      product = Product.create!(product_params)
      
      if product.valid?
        # product.save
        render json: {product: ProductSerializer.new(product)}, status: :created
      else
        render json: {error: "Failed to create a product"}, status: :not_acceptable
      end
  end

  def edit
    product = Product.find(params[:id])
  end
  
    def update
      product = Product.find(params[:id])
      product.update(product_params)
      render json: product
  end
  
  
  
    private
  
    def product_params
      params.permit(:id, :name, :price, :color, :sku, :user_id, :onhand_qty)
    end
  
end







