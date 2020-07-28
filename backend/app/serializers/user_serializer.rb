class UserSerializer < ActiveModel::Serializer
  attributes :username,
  :password,
  :first_name, :last_name,
  # :company_name, :title,
  # :tax_rate,
  # :website_url,  :commisson_rate, :logo,
  # :address_street, :address_city,
  # :address_city, :address_zip   

end
