class Product < ApplicationRecord
    
belongs_to :user
has_many :corders
has_many :customers, through: :corders

end
