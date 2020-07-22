class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url,
    :price, :color, :sku,
    :onhand_qty, :coming_in_qty,
    :sale_price
 
end
