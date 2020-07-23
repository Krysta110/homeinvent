class Product < ApplicationRecord
    has_one :user
    has_many :purchaseorders

    
end

# Products:
# -	belongs to user
# -	has many purchase orders
# -	has many customer orders
# -	has many customers thought customer orders
