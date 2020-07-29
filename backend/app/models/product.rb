class Product < ApplicationRecord
    
 

    has_many :poproducts
    has_many :porders

    # has_many :users, through: :items
end
