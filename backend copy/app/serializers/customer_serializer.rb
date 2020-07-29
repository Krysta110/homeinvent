class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :email, :user_id

end
