class PurchaseOrder < ApplicationRecord
    belongs_to :user
    has_many :products

end


# Purchase Orders:
# -	belongs to user
# -	has many products
