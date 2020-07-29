class Corder < ApplicationRecord

    belongs_to :customer

    belongs_to :item
    
    has_many :coitems
    # has_many :items, through: :coitems
    
    
end
