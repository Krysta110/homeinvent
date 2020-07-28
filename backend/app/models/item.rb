class Item < ApplicationRecord

    belongs_to :user

    belongs_to :product

    has_many :coitems
    has_many :corders, through: :coitems

end
