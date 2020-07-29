class User < ApplicationRecord

  # has_many :items
  # has_many :products, through: :items
  
  # has_many :porders

  # has_many :customers
  # has_many :corders, through: :customers



  has_secure_password
  validates :username, uniqueness: {case_sensitive: false}
  
  
end

# -	has many customers
# -	has many products
# -	has many purchase orders (through products)
# -	has many customer orders through customer

