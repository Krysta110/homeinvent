class Corder < ApplicationRecord

    belongs_to :customer

    has_many :coitems
    has_many :items, through: :coitems
end
