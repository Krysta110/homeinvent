class User < ApplicationRecord

  has_many :products
  has_many :purchaseorders, through: :products


  has_secure_password
  validates :username, uniqueness: {case_sensitive: false}
  
  
end

# -	has many customers
# -	has many products
# -	has many purchase orders (through products)
# -	has many customer orders through customer
