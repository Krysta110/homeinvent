class Customer < ApplicationRecord
    belongs_to :user

    has_many :corders

    has_many :products, through: :corders



end
