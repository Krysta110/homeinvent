class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :color, :sku, :onhand_qty, :user_id
 
end
