class UserSerializer < ActiveModel::Serializer
  attributes :id, :username,
  :password,
  :first_name, :last_name,
  :company_name
end
