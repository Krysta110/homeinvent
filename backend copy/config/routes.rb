Rails.application.routes.draw do
  # localhost:3000/api/v1/login

  resources :products

  namespace :api do
    namespace :v1 do
      resources :users #, only: [:create, :show]
                         #, only: [:create, :index, :show]
      resources :dashboard

      resources :products
      resources :porders

      resources :customers
      resources :corders

      resources :items

      post "/login", to: "auth#create"
      # get "/products", to: "products#index"
    end
  end
end
