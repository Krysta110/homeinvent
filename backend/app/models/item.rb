class Item < ApplicationRecord

    # belongs_to :user

    belongs_to :product
    # belongs_to :corder
    has_many :corders

    has_many :coitems
    # has_many :corders, through: :coitems

end
