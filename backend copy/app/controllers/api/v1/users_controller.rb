class Api::V1::UsersController < ApplicationController
  skip_before_action :logged_in?, only: [:create]
  
  def index
    users = User.all 
    render json: users 
  end

  def show
    user = User.find(params[:id]) 
    render json: user 
  end

  # Sign Up
  def create
    user = User.new(user_params)
    
    if user.valid?
      user.save
      render json: {user: UserSerializer.new(user)}, status: :created
    else
      render json: {error: "Failed to create a user"}, status: :not_acceptable
    end
  end


def edit
  user = User.find(params[:id])
end

  def update
    user = User.find(params[:id])
    user.update(user_params)
    render json: user
end


  private

  def user_params
    params.permit(:id, :username, :password, :first_name, :last_name, :company_name)
  # :company_name, :title, :tax_rate, :website_url)
  end
end
