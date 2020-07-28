class Porder < ApplicationRecord
    belongs_to :user

    has_many :poproducts
    has_many :products, through: :poproducts

end
