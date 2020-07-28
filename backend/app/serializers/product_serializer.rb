class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :color, :sku
 
end
