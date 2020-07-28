class Product < ApplicationRecord
    
 

    has_many :poproducts
    has_many :porders, through: :poproducts

    has_many :users, through: :items
end
