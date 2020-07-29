class User < ApplicationRecord
  has_many :products
  has_many :customers
  has_many :corders, through: :customers
  has_many :corders, through: :products


  has_secure_password
  validates :username, uniqueness: {case_sensitive: false}
  
  
end
